var trace1 = {
                    x: [0.009323,0.014323,0.019323,0.024323,0.034323,0.039323,0.044323,0.049323],

                    y: [0.4374,0.3709,0.3246,0.297,0.2602,0.2512,0.2461,0.2423],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.53953,0.50947,0.48417,0.46239,0.44331,0.42638,0.41119,0.39746,0.38496,0.37352,0.36301,0.35332,0.34436,0.33606,0.32835,0.32119,0.31452,0.30832,0.30255,0.29718,0.29219,0.28755,0.28324,0.27925,0.27555,0.27213,0.26897,0.26606,0.26338,0.26093,0.25868,0.25663,0.25476,0.25306,0.25152,0.25013,0.24888,0.24776,0.24676,0.24586,0.24508,0.24438,0.24378,0.24325,0.2428,0.24242],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0293],
                y: [0.2734],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '4Y4Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv5', data, layout);
