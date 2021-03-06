var trace1 = {
                    x: [0.010223,0.015223,0.020223,0.025223,0.035223,0.040223,0.045223,0.050223],

                    y: [0.3339,0.3015,0.2826,0.2719,0.2567,0.2529,0.2508,0.2489],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.40249,0.38392,0.36874,0.35602,0.34516,0.33576,0.32754,0.32028,0.31383,0.30806,0.30288,0.29821,0.29397,0.29013,0.28663,0.28344,0.28052,0.27784,0.27538,0.27313,0.27105,0.26913,0.26737,0.26574,0.26423,0.26283,0.26154,0.26035,0.25924,0.25821,0.25725,0.25636,0.25553,0.25476,0.25405,0.25338,0.25276,0.25218,0.25165,0.25114,0.25067,0.25024,0.24983,0.24945,0.2491,0.24876],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0302],
                y: [0.2619],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '10Y5Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv7', data, layout);
