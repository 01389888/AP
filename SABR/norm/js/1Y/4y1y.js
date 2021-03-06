var trace1 = {
                    x: [0.009134,0.014134,0.019134,0.024134,0.034134,0.039134,0.044134,0.049134],
                    y: [0.4438,0.3762,0.3287,0.3004,0.263,0.2539,0.2487,0.2449],
                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.54363,0.51333,0.48784,0.4659,0.44668,0.42963,0.41433,0.40051,0.38793,0.37642,0.36585,0.3561,0.34709,0.33875,0.331,0.3238,0.31711,0.31088,0.30509,0.2997,0.29469,0.29004,0.28572,0.28171,0.27801,0.27458,0.27142,0.26851,0.26583,0.26337,0.26112,0.25907,0.2572,0.2555,0.25396,0.25257,0.25132,0.2502,0.2492,0.2483,0.24752,0.24682,0.24622,0.24569,0.24524,0.24486],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0291],
                y: [0.2764],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '4Y1Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv5', data, layout);
