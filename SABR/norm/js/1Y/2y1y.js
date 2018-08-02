var trace1 = {
                    x: [0.009988,0.014988,0.019988,0.024988,0.034988,0.039988,0.044988,0.049988],
                    y: [0.4204,0.3367,0.2802,0.2481,0.2137,0.2132,0.2176,0.2231],
                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.55542,0.51965,0.48923,0.46277,0.43936,0.41839,0.39941,0.3821,0.36621,0.35155,0.33797,0.32536,0.31362,0.30268,0.29248,0.28297,0.27413,0.26593,0.25835,0.25138,0.24501,0.23924,0.23407,0.22949,0.22548,0.22205,0.21917,0.21682,0.21496,0.21357,0.21259,0.212,0.21174,0.21178,0.21207,0.21259,0.21329,0.21415,0.21514,0.21625,0.21744,0.21871,0.22003,0.2214,0.22281,0.22425],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.03],
                y: [0.2206],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '2Y1Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv3', data, layout);
