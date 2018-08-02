var trace1 = {
                    x: [0.009209,0.014209,0.019209,0.024209,0.034209,0.039209,0.044209,0.049209],

                    y: [0.5502,0.4395,0.3313,0.2504,0.1618,0.1653,0.1887,0.2146],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.74116,0.68827,0.64295,0.60323,0.56782,0.53583,0.50663,0.47972,0.45476,0.43146,0.40959,0.38896,0.36944,0.3509,0.33323,0.31637,0.30025,0.28482,0.27005,0.25594,0.24248,0.22972,0.21772,0.2066,0.1965,0.18762,0.18018,0.17434,0.17021,0.16774,0.16674,0.16696,0.16814,0.17004,0.17245,0.17522,0.17825,0.18144,0.18473,0.18808,0.19145,0.19483,0.19819,0.20152,0.20482,0.20807],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0292],
                y: [0.2002],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3M3Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv', data, layout);
