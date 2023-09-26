const path = require('path')
const HtmlWebapackPlugin = require('html-webpack-plugin')


module.exports= {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
        test: /\.css$/,
        use: [
            "style-loader",
            "css-loader", // for styles
        ],
      },
        ]
    },
    plugins: [
        new HtmlWebapackPlugin({
            template: './src/index.html'
        })
    ]
}

