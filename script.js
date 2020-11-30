var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor:'rgb(253, 244, 243,0.6)',
            borderColor: '#dc6166',
            lineTension:'0',
            pointRadius:'10',
            pointHoverRadius:'12',
           
            borderWidth:'2',
            data: [56,38,20,40,59,45,40]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



    Chart.pluginService.register({
      beforeDraw: function(chart) {
        if (chart.config.options.elements.center) {
          // Get ctx from string
          var ctx = chart.chart.ctx;

          // Get options from the center object in options
          var centerConfig = chart.config.options.elements.center;
          var fontStyle = 'Arial';
          var txt = chart.config.data.datasets[0].data[0];
            console.log(txt)
          var color = centerConfig.color || '#000';
          var maxFontSize = centerConfig.maxFontSize || 75;
          var sidePadding = centerConfig.sidePadding || 20;
          var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
          // Start with a base font of 30px
          ctx.font = "30px " + fontStyle;

//          // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
          var stringWidth = ctx.measureText(txt).width;
          var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
//
//          // Find out how much the font can grow in width.
          var widthRatio = elementWidth / stringWidth;
          var newFontSize = Math.floor(30 * widthRatio);
          var elementHeight = (chart.innerRadius * 2);
//
//          // Pick a new font size so it will not be larger than the height of label.
          var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
          var minFontSize = centerConfig.minFontSize;
          var lineHeight = centerConfig.lineHeight || 25;
          var wrapText = false;
//
          if (minFontSize === undefined) {
            minFontSize = 20;
          }
//
          if (minFontSize && fontSizeToUse < minFontSize) {
            fontSizeToUse = minFontSize;
            wrapText = true;
          }

          // Set font settings to draw it correctly.
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
          var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
          ctx.font = 30 + "px" + fontStyle;
          ctx.fillStyle = color;

          if (!wrapText) {
            ctx.fillText(txt, centerX, centerY);
            return;
          }

          var words = txt.split(' ');
          var line = '';
          var lines = [];

          // Break words up into multiple lines if necessary
          for (var n = 0; n < words.length; n++) {
            var testLine = line + words[n] + ' ';
            var metrics = ctx.measureText(testLine);
            var testWidth = metrics.width;
            if (testWidth > elementWidth && n > 0) {
              lines.push(line);
              line = words[n] + ' ';
            } else {
              line = testLine;
            }
          }

          // Move the center up depending on line height and number of lines
          centerY -= (lines.length / 2) * lineHeight;

          for (var n = 0; n < lines.length; n++) {
            ctx.fillText(lines[n], centerX, centerY);
            centerY += lineHeight;
          }
          //Draw text in center
          ctx.fillText(line, centerX, centerY);
        }
      }
    });


    var config0 = {
      type: 'doughnut',
      data: {
        labels: [
        
        ],
        datasets: [{
          data: [19,81],
          backgroundColor: [
            "skyblue",
            "transparent",
            
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
           
          ]
        }]
      },
      options: {
          cutoutPercentage: 90,
           responsive: true,
        elements: {
          center: {
            text:'',
            color: 'black', // Default is #000000
            fontStyle: 'Arial', // Default is Arial
            sidePadding: 20, // Default is 20 (as a percentage)
            minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25 // Default is 25 (in px), used for when text wraps
          }
        }
      }
    };
    var config1 = {
      type: 'doughnut',
      data: {
        labels: [
        
        ],
        datasets: [{
          data: [31,69],
          backgroundColor: [
            "red",
            "transparent",
            
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
           
          ]
        }]
      },
      options: {
          cutoutPercentage: 90,
           responsive: true,
        elements: {
          center: {
            text:'',
            color: 'black', // Default is #000000
            fontStyle: 'Arial', // Default is Arial
            sidePadding: 20, // Default is 20 (as a percentage)
            minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25 // Default is 25 (in px), used for when text wraps
          }
        }
      }
    };
    var config2 = {
      type: 'doughnut',
      data: {
        labels: [
        
        ],
        datasets: [{
          data: [65,35],
          backgroundColor: [
            "orange",
            "transparent",
            
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
           
          ]
        }]
      },
      options: {
          cutoutPercentage: 90,
           responsive: true,
        elements: {
          center: {
            text:'',
            color: 'black', // Default is #000000
            fontStyle: 'Arial', // Default is Arial
            sidePadding: 20, // Default is 20 (as a percentage)
            minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25 // Default is 25 (in px), used for when text wraps
          }
        }
      }
    };
    var config3 = {
      type: 'doughnut',
      data: {
        labels: [
        
        ],
        datasets: [{
          data: [69,31],
          backgroundColor: [
            "green",
            "transparent",
            
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
           
          ]
        }]
      },
      options: {
          cutoutPercentage: 90,
           responsive: true,
        elements: {
          center: {
            text:'',
            color: 'black', // Default is #000000
            fontStyle: 'Arial', // Default is Arial
            sidePadding: 20, // Default is 20 (as a percentage)
            minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25 // Default is 25 (in px), used for when text wraps
          }
        }
      }
    };

    var ctx = document.getElementById("chartProgress").getContext("2d");
    var myChart = new Chart(ctx, config0);
    
    var ctx = document.getElementById("chartProgress1").getContext("2d");
    var myChart = new Chart(ctx, config1);

    var ctx = document.getElementById("chartProgress2").getContext("2d");
    var myChart = new Chart(ctx, config2);
    
    var ctx = document.getElementById("chartProgress3").getContext("2d");
    var myChart = new Chart(ctx, config3);
/*var ctx = document.getElementById("chartProgress");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: '# of Tomatoes',
      data: [19,81],
      backgroundColor: [
        'skyblue',
        'white',
      ],
      
      borderColor: [
        'skyblue',
        
      ],
      borderWidth: 1
    }]
  },
  options: {
    
   	cutoutPercentage: 96,
    responsive: true,
  }
  
}); 










var ctx = document.getElementById("chartProgress1");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: '# of Tomatoes',
      data: [31,69],
      backgroundColor: [
        'red',
        'white',
      ],
      borderColor: [
        'red',
        
      ],
      borderWidth: 1
    }]
  },
  options: {
   		cutoutPercentage: 96,
    responsive: true,

  }
});







var ctx = document.getElementById("chartProgress2");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: '# of Tomatoes',
      data: [65,35],
      backgroundColor: [
        'yellow',
        'white',
      ],
      borderColor: [
        'yellow',
        
      ],
      borderWidth: 1
    }]
  },
  options: {
   	cutoutPercentage: 96,
    responsive: true,

  }
});






var ctx = document.getElementById("chartProgress3");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: '# of Tomatoes',
      data: [69,31],
      backgroundColor: [
        'green',
        'white',
      ],
      borderColor: [
        'green',
        
      ],
      borderWidth: 1
    }]
  },
  options: {
   		cutoutPercentage: 96,
    responsive: true,

  }
}); */

