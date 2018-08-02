var trace1 = {
                    x: [0.00964,0.01464,0.01964,0.02464,0.03464,0.03964,0.04464,0.04964],

                    y: [0.4713,0.3797,0.3222,0.2908,0.2499,0.2417,0.2382,0.2358],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.59486,0.55921,0.52894,0.50264,0.47942,0.45863,0.43986,0.42275,0.40707,0.39262,0.37925,0.36683,0.35528,0.34452,0.33447,0.32509,0.31633,0.30817,0.30056,0.29349,0.28693,0.28088,0.2753,0.2702,0.26554,0.26133,0.25755,0.25417,0.25119,0.24857,0.24631,0.24437,0.24275,0.2414,0.24032,0.23947,0.23884,0.2384,0.23814,0.23803,0.23806,0.23821,0.23847,0.23883,0.23926,0.23978],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0296],
                y: [0.2628],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '15Y1Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv8', data, layout);
