var trace1 = {
                    x: [0.002582,0.007582,0.012582,0.017582,0.027582,0.032582,0.037582,0.042582],

                    y: [0.6346,0.4922,0.3496,0.2812,0.2243,0.2144,0.211,0.2088],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.53655,0.50358,0.47505,0.44988,0.42735,0.40695,0.38834,0.37123,0.35541,0.34074,0.32708,0.31435,0.30246,0.29137,0.28103,0.27141,0.26249,0.25427,0.24673,0.23988,0.23372,0.22824,0.22342,0.21927,0.21574,0.21282,0.21045,0.20859,0.20719,0.20619,0.20556,0.20523,0.20517,0.20534,0.2057,0.20622,0.20688,0.20765,0.20851,0.20945,0.21046,0.21151,0.21261,0.21373,0.21489,0.21606],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0226],
                y: [0.2454],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '30Y30Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv9', data, layout);