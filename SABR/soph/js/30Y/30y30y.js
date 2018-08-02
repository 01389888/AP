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
                y: [0.53642,0.50278,0.4737,0.44807,0.42515,0.40442,0.3855,0.36812,0.35207,0.33718,0.32333,0.31042,0.29839,0.28717,0.27673,0.26704,0.25808,0.24985,0.24235,0.23558,0.22953,0.22421,0.21961,0.21569,0.21244,0.20981,0.20775,0.20621,0.20513,0.20445,0.20411,0.20408,0.20429,0.20472,0.20533,0.20608,0.20695,0.20792,0.20897,0.21008,0.21125,0.21246,0.2137,0.21496,0.21624,0.21753],
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