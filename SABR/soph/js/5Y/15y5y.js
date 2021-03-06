var trace1 = {
                    x: [0.009388,0.014388,0.019388,0.024388,0.034388,0.039388,0.044388,0.049388],

                    y: [0.4315,0.3474,0.2938,0.2646,0.2271,0.2196,0.2166,0.2143],

                    mode: 'markers',
                    name: 'Implied Volatility',
                    marker: {
                        color: 'rgb(219, 64, 82)',
                        size: 8,
                    }
                };

            var trace2 = {
                x: [0.005,0.006,0.007,0.008,0.009,0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.032,0.033,0.034,0.035,0.036,0.037,0.038,0.039,0.04,0.041,0.042,0.043,0.044,0.045,0.046,0.047,0.048,0.049,0.05],
                y: [0.53982,0.50731,0.4797,0.45573,0.43457,0.41563,0.39853,0.38296,0.36868,0.35553,0.34337,0.33209,0.32159,0.31181,0.30269,0.29417,0.28624,0.27884,0.27195,0.26556,0.25964,0.25418,0.24917,0.24458,0.24041,0.23664,0.23327,0.23026,0.22761,0.22531,0.22332,0.22162,0.22021,0.21905,0.21812,0.2174,0.21688,0.21653,0.21633,0.21628,0.21634,0.21651,0.21678,0.21713,0.21756,0.21804],
                mode: 'lines',
                name:'SABR Volatility',
                line: {
                    color: 'rgb(55, 128, 191)',
                    width: 2
                }
            };

            var trace3 = {
                x: [0.0294],
                y: [0.2389],
                mode: 'markers',
                name: 'ATM Implied Volatility',
                marker: {
                    color: 'rgb(0, 128, 0)',
                    size: 12
                },
            };

            var data = [trace2, trace1, trace3];

            var layout = {
                title: '15Y5Y Swaption',
                xaxis:{title: 'Strike Rate (%)'},
                yaxis:{title: 'Volatility'}
            };

            Plotly.newPlot('myDiv8', data, layout);
