var trace1 = {
                    x: [0.00695,0.01195,0.01695,0.02195,0.03195,0.03695,0.04195,0.04695],

                    y: [0.5761,0.4493,0.3454,0.2932,0.2412,0.2307,0.2258,0.2238],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.64177,0.60214,0.5679,0.53772,0.51071,0.48626,0.46391,0.44335,0.4243,0.40657,0.39002,0.3745,0.35993,0.34623,0.33334,0.32122,0.30983,0.29915,0.28918,0.27991,0.27136,0.26352,0.25643,0.25008,0.2445,0.23968,0.23561,0.23226,0.22961,0.22761,0.22619,0.22529,0.22485,0.22481,0.22511,0.2257,0.22653,0.22756,0.22875,0.23008,0.23151,0.23303,0.23462,0.23626,0.23794,0.23966],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0269],
                y: [0.2613],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '30Y5Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv9', data, layout);
