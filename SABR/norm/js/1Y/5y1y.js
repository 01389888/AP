var trace1 = {
                    x: [0.009139,0.014139,0.019139,0.024139,0.034139,0.039139,0.044139,0.049139],
                    y: [0.3979,0.3552,0.3245,0.3049,0.2767,0.2679,0.2614,0.2558],
                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.46759,0.44628,0.42863,0.41365,0.40067,0.38928,0.37916,0.37008,0.36188,0.35441,0.34758,0.3413,0.3355,0.33012,0.32513,0.32047,0.31612,0.31204,0.30821,0.30461,0.30122,0.29802,0.29499,0.29213,0.28942,0.28684,0.2844,0.28207,0.27986,0.27775,0.27575,0.27383,0.272,0.27026,0.26858,0.26699,0.26546,0.26399,0.26259,0.26124,0.25994,0.2587,0.25751,0.25637,0.25526,0.25421],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0291],
                y: [0.2878],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '5Y1Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv6', data, layout);
