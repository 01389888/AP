var trace1 = {
                    x: [0.010444,0.015444,0.020444,0.025444,0.035444,0.040444,0.045444,0.050444],

                    y:[0.3312,0.2995,0.2808,0.2703,0.2553,0.2515,0.2494,0.2475],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.4034,0.38449,0.36901,0.35603,0.34494,0.33533,0.32691,0.31949,0.31288,0.30698,0.30167,0.29689,0.29256,0.28863,0.28506,0.2818,0.27883,0.2761,0.27361,0.27132,0.26922,0.26729,0.26552,0.26388,0.26237,0.26098,0.2597,0.25851,0.25742,0.25641,0.25547,0.2546,0.2538,0.25306,0.25237,0.25174,0.25115,0.2506,0.2501,0.24963,0.2492,0.24879,0.24842,0.24808,0.24776,0.24747],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0304],
                y: [0.2604],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '10Y2Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv7', data, layout);
