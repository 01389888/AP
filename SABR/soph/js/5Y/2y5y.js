var trace1 = {
                    x: [0.009428,0.014428,0.019428,0.024428,0.034428,0.039428,0.044428,0.049428],

                    y: [0.5054,0.4043,0.3342,0.2944,0.2528,0.2525,0.258,0.2646],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.65451,0.61188,0.57561,0.54406,0.51615,0.49114,0.4685,0.44786,0.4289,0.41142,0.39523,0.38019,0.36621,0.35318,0.34105,0.32977,0.3193,0.30961,0.30069,0.29252,0.28511,0.27844,0.27252,0.26734,0.26289,0.25914,0.25608,0.25366,0.25185,0.25058,0.24981,0.24947,0.24952,0.24991,0.25058,0.25148,0.25259,0.25387,0.25528,0.25681,0.25842,0.2601,0.26185,0.26363,0.26544,0.26728],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0294],
                y: [0.2612],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '2Y5Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv3', data, layout);
