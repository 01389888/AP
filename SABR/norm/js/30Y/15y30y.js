var trace1 = {
                    x: [0.007599,0.012599,0.017599,0.022599,0.032599,0.037599,0.042599,0.047599],

                    y: [0.4394,0.3527,0.291,0.2581,0.2195,0.2121,0.2095,0.2073],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.50995,0.47874,0.45226,0.42928,0.409,0.39089,0.37454,0.35967,0.34607,0.33355,0.322,0.3113,0.30138,0.29217,0.2836,0.27565,0.26827,0.26142,0.2551,0.24927,0.24393,0.23904,0.2346,0.2306,0.227,0.22381,0.22099,0.21854,0.21642,0.21461,0.2131,0.21186,0.21086,0.21009,0.20951,0.20912,0.20889,0.20879,0.20883,0.20897,0.20921,0.20954,0.20994,0.2104,0.21092,0.21149],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0276],
                y: [0.2316],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '15Y30Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv8', data, layout);