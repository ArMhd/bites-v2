const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
		],
	},
	devServer: {
		disableHostCheck: true,
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			filename: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/public/'),
					to: path.resolve(__dirname, 'dist/'),
				},
			],
		}),
		new InjectManifest({
			swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
		}),
		new WebpackPwaManifest({
			name: 'Bites',
			short_name: 'Bites',
			description: 'Bites is a food delivery app',
			background_color: '#71DFE7',
			start_url: '/index.html',
			display: 'standalone',
			theme_color: '#ff8303',
			crossorigin: 'use-credentials',
			icons: [
				{
					src: path.resolve('src/public/icons/icon-72x72.png'),
					size: '72x72',
				},
				{
					src: path.resolve('src/public/icons/icon-96x96.png'),
					size: '96x96',
				},
				{
					src: path.resolve('src/public/icons/icon-128x128.png'),
					size: '128x128',
				},
				{
					src: path.resolve('src/public/icons/icon-144x144.png'),
					size: '144x144',
				},
				{
					src: path.resolve('src/public/icons/icon-152x152.png'),
					size: '152x152',
				},
				{
					src: path.resolve('src/public/icons/icon-192x192.png'),
					size: '192x192',
				},
				{
					src: path.resolve('src/public/icons/icon-384x384.png'),
					size: '384x384',
				},
				{
					src: path.resolve('src/public/icons/icon-512x512.png'),
					size: '512x512',
				},
			],
		}),
	],
};
