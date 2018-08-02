var trace1 = {
                    x: [0.009232,0.014232,0.019232,0.024232,0.034232,0.039232,0.044232,0.049232],

                    y: [0.5939,0.4744,0.3577,0.2704,0.1747,0.1785,0.2037,0.2317],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.7961,0.73982,0.69161,0.64937,0.61172,0.57773,0.5467,0.51814,0.49164,0.46691,0.44371,0.42185,0.40116,0.38153,0.36284,0.34501,0.32798,0.31169,0.29611,0.28124,0.26706,0.25362,0.24098,0.22924,0.21852,0.20901,0.20088,0.19431,0.1894,0.18612,0.18437,0.18391,0.18451,0.18593,0.18797,0.19045,0.19325,0.19628,0.19946,0.20274,0.20608,0.20944,0.2128,0.21616,0.21949,0.22278],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0292],
                y: [0.2162],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3M5Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv', data, layout);
