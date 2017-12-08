 var trace1 = {
    x: [1,2],
    y: [93, 0],
  mode: 'lines+markers',
  name: 'Ned Stark'
};

var trace2 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [42, 24, 17, 0],
  mode: 'lines+markers',
  name: 'Catelyn Stark'
};

var trace3 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [10, 17, 21, 29, 1, 0],
  mode: 'lines+markers',
  name: 'Twin Lannister'
};

var trace4 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [0, 10, 21, 18, 11, 18, 0],
  mode: 'lines+markers',
  name: 'Margaery Tyrell'
};

var trace5 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [25, 28, 26, 0],
  mode: 'lines+markers',
  name: 'Robb Stark'
};

var trace6 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [0, 20, 14, 10, 29, 0],
  mode: 'lines+markers',
  name: 'Stannis Baratheon'
};

var trace7 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [0, 0, 13, 14, 19, 21, 0],
  mode: 'lines+markers',
  name: 'Ramsay Bolton'
};

var trace8 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [0, 0, 0, 0, 17, 21, 0],
  mode: 'lines+markers',
  name: 'High Sparrow'
};

var trace9 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [31, 0],
  mode: 'lines+markers',
  name: 'Robert Baratheon'
};

var trace10 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [0, 0, 0, 29, 0],
  mode: 'lines+markers',
  name: 'Oberyn Martell'
};

var data = [ trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10 ];

var layout = {
  title:'Screening Time Dead Main Character',
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)'
};

Plotly.newPlot('screenDead', data, layout);