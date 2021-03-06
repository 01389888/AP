var trace1 = {
                    x: [0.00978,0.01478,0.01978,0.02478,0.03478,0.03978,0.04478,0.04978],

                    y: [0.3564,0.3186,0.2922,0.2752,0.2503,0.2424,0.2365,0.2316],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.42683,0.40726,0.39104,0.37725,0.3653,0.35481,0.34548,0.3371,0.32954,0.32265,0.31635,0.31055,0.30521,0.30025,0.29565,0.29136,0.28735,0.28359,0.28007,0.27676,0.27364,0.2707,0.26793,0.2653,0.26282,0.26046,0.25823,0.25611,0.25409,0.25217,0.25034,0.2486,0.24694,0.24536,0.24385,0.24241,0.24102,0.2397,0.23844,0.23723,0.23607,0.23496,0.23389,0.23287,0.23189,0.23095],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0298],
                y: [0.26],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '5Y15Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv6', data, layout);
