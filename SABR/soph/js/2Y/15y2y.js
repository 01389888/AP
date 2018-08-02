var trace1 = {
                    x: [0.009578,0.014578,0.019578,0.024578,0.034578,0.039578,0.044578,0.049578],

                    y:[0.4594,0.37,0.3137,0.283,0.2431,0.2351,0.2318,0.2294],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.57857,0.54385,0.51437,0.48876,0.46615,0.44592,0.42763,0.41098,0.39572,0.38165,0.36864,0.35656,0.34532,0.33485,0.32508,0.31595,0.30744,0.2995,0.29211,0.28524,0.27887,0.27299,0.26757,0.26262,0.25811,0.25403,0.25036,0.24709,0.24421,0.24168,0.23949,0.23763,0.23606,0.23477,0.23373,0.23292,0.23232,0.2319,0.23166,0.23156,0.2316,0.23176,0.23202,0.23237,0.2328,0.23331],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0296],
                y: [0.2557],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '15Y2Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv8', data, layout);