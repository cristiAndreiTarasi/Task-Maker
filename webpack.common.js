// const path = require

module.exports = {
	entry: {
        main: [
            "react-hot-loader/patch", 
            "@babel/polyfill", 
            "./src/index.js"
        ],
        // here other entries
    },

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: { minimize: true }
				}]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: ['babel-loader', 'react-hot-loader/webpack']
			},
		]
	},
};