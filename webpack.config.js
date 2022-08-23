const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');	
module.exports = {
    entry: './src/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
		clean:true
    },
    resolve:{
        alias: {
            '@': path.join(__dirname, 'src')
        },
	    extensions: ['vue', '.js', '.ts']
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.s?css$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options:{
					appendTsSuffixTo:[/\.vue$/]
				}
			}
        ]
    },
    devtool: 'inline-source-map',
    plugins:[
        new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:'./index.html'
		})
    ],
	devServer: {
		static:'./dist'
	}
};