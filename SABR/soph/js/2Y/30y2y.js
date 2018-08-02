var trace1 = {
                    x: [0.007257,0.012257,0.017257,0.022257,0.032257,0.037257,0.042257,0.047257],

                    y:[0.5897,0.4601,0.3556,0.3027,0.2495,0.2387,0.2335,0.2315],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y:[0.66241,0.62256,0.58808,0.55765,0.5304,0.50571,0.48313,0.46234,0.44308,0.42514,0.40838,0.39266,0.3779,0.36401,0.35092,0.3386,0.327,0.3161,0.30589,0.29637,0.28752,0.27936,0.2719,0.26515,0.25912,0.2538,0.2492,0.2453,0.24207,0.23949,0.23749,0.23604,0.23507,0.23454,0.23438,0.23454,0.23498,0.23566,0.23653,0.23757,0.23874,0.24003,0.2414,0.24285,0.24436,0.24592],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0273],
                y: [0.2701],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '30Y2Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv9', data, layout);
