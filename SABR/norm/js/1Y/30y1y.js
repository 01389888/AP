var trace1 = {
                    x: [0.007364,0.012364,0.017364,0.022364,0.032364,0.037364,0.042364,0.047364],

                    y: [0.6144,0.4794,0.3712,0.3163,0.2609,0.2496,0.2441,0.242],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.69756,0.65497,0.61811,0.58558,0.55644,0.53004,0.50589,0.48364,0.46302,0.44382,0.42586,0.40902,0.3932,0.3783,0.36427,0.35105,0.33861,0.32693,0.316,0.30581,0.29637,0.28769,0.27979,0.27268,0.26639,0.26092,0.25625,0.25238,0.24927,0.24688,0.24514,0.24399,0.24336,0.24319,0.24341,0.24397,0.2448,0.24586,0.24712,0.24853,0.25007,0.25171,0.25343,0.25522,0.25705,0.25892],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0274],
                y: [0.2824],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '30Y1Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv9', data, layout);
