var trace1 = {
                    x: [0.007758,0.012758,0.017758,0.022758,0.032758,0.037758,0.042758,0.047758],
                    y: [0.4155,0.3311,0.2466,0.1845,0.1169,0.1215,0.1396,0.1593],
                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.51702,0.47958,0.44752,0.41944,0.39442,0.37182,0.3512,0.33222,0.31461,0.29818,0.28277,0.26825,0.25452,0.24149,0.22911,0.21732,0.20608,0.19537,0.18519,0.17554,0.16645,0.15799,0.15024,0.1433,0.13733,0.13244,0.12872,0.12618,0.12476,0.1243,0.12463,0.12556,0.12695,0.12866,0.13061,0.13272,0.13494,0.13722,0.13954,0.14187,0.14421,0.14653,0.14884,0.15112,0.15336,0.15558],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0277580000000000],
                y: [0.144900000000000],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3M1Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv', data, layout);
