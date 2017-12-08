var data = [{
        values: [10, 1],
        labels: ['Win', 'Loss'],
        domain: {
          x: [0, .38]
        },
        name: 'siege',
        hoverinfo: 'label+percent+name',
        hole: .6,
        type: 'pie'
    },{
        values: [10, 4,],
        labels: ['Win', 'Loss'],
        text: 'CO2',
        textposition: 'inside',
        domain: {x: [.04, 1]},
        name: 'Pitched Battle',
        hoverinfo: 'label+percent+name',
        hole: .6,
        type: 'pie'
    },{
        values: [10, 0,],
        labels: ['Win', 'Loss'],
        text: 'Ambush',
        textposition: 'inside',
        domain: {x: [.70, 1]},
        name: 'Ambush',
        hoverinfo: 'label+percent+name',
        hole: .6,
        type: 'pie'
    }];

    var layout = {
        annotations: [
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'Siege',
            x: 0.155,
            y: 0.5
          },
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'Pitched Battle',
            x: 0.52,
            y: 0.5
          },
          {
            font: {
              size: 20
            },
            showarrow: false,
            text: 'Ambush',
            x: 0.895,
            y: 0.5
          }
          ,{
            font: {
              size: 40
            },
            showarrow: false,
            text: 'Battle Strategies',
            x: 0.52,
            y: 1.32
          }
        ]
        ,paper_bgcolor: 'rgba(0,0,0,0)'
        ,plot_bgcolor: 'rgba(0,0,0,0)'
    };

    Plotly.newPlot('battleStrat', data, layout);