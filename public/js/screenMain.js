var trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7],
    y: [55, 34, 36, 43, 49, 52, 70],
  mode: 'lines+markers',
  name: 'Jon Snow'
};

var trace2 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [53, 65, 50, 48, 44, 34, 44],
  mode: 'lines+markers',
  name: 'Tyrion Lannister'
};

var trace3 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [54, 39, 31, 28, 42, 29, 55],
  mode: 'lines+markers',
  name: 'Daenerys Targaryen'
};

var trace4 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [24, 34, 34, 33, 35, 41, 39],
  mode: 'lines+markers',
  name: 'Sansa Stark'
};

var trace5 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [28, 36, 22, 37, 50, 29, 34],
  mode: 'lines+markers',
  name: 'Cersei Lannister'
};

var trace6 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [34, 39, 27, 26, 35, 30, 35],
  mode: 'lines+markers',
  name: 'Arya Stark'
};

var trace7 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [21, 18, 35, 36, 22, 31, 37],
  mode: 'lines+markers',
  name: 'Jaime Lannister'
};

var trace8 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [21, 11, 24, 26, 24, 16, 22],
  mode: 'lines+markers',
  name: 'Samwel Tarly'
};

var trace9 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [28, 18, 19, 14, 30, 11, 25],
  mode: 'lines+markers',
  name: 'Jorah Mormont'
};

var trace10 = {
  x: [1, 2, 3, 4, 5, 6, 7],
  y: [17, 40, 23, 12, 16, 17, 13],
  mode: 'lines+markers',
  name: 'Theon Greyjoy'
};

var data = [ trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10 ];

var layout = {
  title:'Screening Time Main Character',
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)'
};

Plotly.newPlot('screenMain', data, layout);