var trace1 = {
                    x: [0.009278,0.014278,0.019278,0.024278,0.034278,0.039278,0.044278,0.049278],

                    y: [0.4611,0.381,0.3258,0.294,0.2554,0.2501,0.2496,0.2503],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.57934,0.54445,0.51494,0.48942,0.46696,0.44695,0.42895,0.41261,0.39771,0.38404,0.37146,0.35984,0.34909,0.33914,0.32992,0.32137,0.31346,0.30614,0.29939,0.29318,0.28749,0.28229,0.27756,0.27329,0.26945,0.26602,0.26298,0.26031,0.25799,0.25599,0.2543,0.25288,0.25171,0.25078,0.25006,0.24953,0.24917,0.24896,0.24889,0.24895,0.24911,0.24936,0.2497,0.25012,0.2506,0.25113],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0293],
                y: [0.2669],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '3Y4Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv4', data, layout);
