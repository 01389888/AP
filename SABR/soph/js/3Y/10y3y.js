var trace1 = {
                    x: [0.010331,0.015331,0.020331,0.025331,0.035331,0.040331,0.045331,0.050331],

                    y:[0.3127,0.2826,0.2649,0.255,0.2408,0.2371,0.2352,0.2334],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.37936,0.36168,0.3472,0.33504,0.32466,0.31566,0.30778,0.30082,0.29464,0.28911,0.28414,0.27966,0.2756,0.27192,0.26857,0.26552,0.26273,0.26018,0.25785,0.2557,0.25374,0.25193,0.25026,0.24873,0.24731,0.24601,0.24481,0.24369,0.24267,0.24172,0.24084,0.24003,0.23927,0.23858,0.23793,0.23733,0.23678,0.23627,0.23579,0.23535,0.23495,0.23457,0.23422,0.2339,0.2336,0.23332],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0303],
                y: [0.2456],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '10Y3Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv7', data, layout);