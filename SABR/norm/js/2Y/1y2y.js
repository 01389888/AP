var trace1 = {
                    x: [0.009976,0.014976,0.019976,0.024976,0.034976,0.039976,0.044976,0.049976],

                    y: [0.5002,0.3894,0.3097,0.2591,0.2223,0.2352,0.2501,0.2651],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.6837,0.63609,0.5954,0.55984,0.52822,0.49976,0.47387,0.45013,0.42821,0.40786,0.38889,0.37115,0.35451,0.33888,0.32419,0.3104,0.29747,0.28539,0.27418,0.26386,0.25447,0.24607,0.23874,0.23253,0.2275,0.22369,0.22106,0.21956,0.21908,0.21949,0.22065,0.22241,0.22465,0.22726,0.23014,0.23322,0.23644,0.23975,0.24313,0.24653,0.24994,0.25334,0.25673,0.26008,0.26339,0.26666],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.03],
                y: [0.2182],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '1Y2Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv2', data, layout);
