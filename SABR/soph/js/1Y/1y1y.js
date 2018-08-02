var trace1 = {
                    x: [0.009962,0.014962,0.019962,0.024962,0.034962,0.039962,0.044962,0.049962],
                    y: [0.4271,0.3325,0.2644,0.2212,0.1898,0.2008,0.2136,0.2264],
                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.58831,0.54692,0.51153,0.48057,0.45303,0.42823,0.40566,0.38494,0.3658,0.34801,0.33142,0.31588,0.30129,0.28758,0.27467,0.26253,0.25113,0.24047,0.23056,0.22141,0.2131,0.20566,0.19919,0.19375,0.18941,0.1862,0.18411,0.18307,0.18297,0.18369,0.18507,0.18697,0.18928,0.19188,0.19471,0.19768,0.20076,0.20389,0.20706,0.21023,0.2134,0.21654,0.21966,0.22273,0.22577,0.22875],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.03],
                y: [0.1863],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '1Y1Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv2', data, layout);
