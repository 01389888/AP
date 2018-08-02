var trace1 = {
                    x: [0.009803,0.014803,0.019803,0.024803,0.034803,0.039803,0.044803,0.049803],

                    y: [0.4584,0.3669,0.3047,0.2693,0.2317,0.2313,0.2361,0.2422],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.60101,0.56223,0.52925,0.50056,0.47518,0.45245,0.43188,0.41312,0.3959,0.38001,0.3653,0.35164,0.33892,0.32708,0.31604,0.30576,0.29621,0.28735,0.27918,0.27167,0.26482,0.25863,0.25308,0.24819,0.24393,0.24029,0.23725,0.23479,0.23286,0.23143,0.23045,0.22988,0.22967,0.22977,0.23014,0.23075,0.23156,0.23253,0.23364,0.23487,0.23619,0.23758,0.23904,0.24054,0.24208,0.24365],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0298],
                y: [0.2393],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '2Y15Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv3', data, layout);
