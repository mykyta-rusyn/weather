module.exports = function(api) {
	api.cache(true);

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				require.resolve('babel-plugin-module-resolver'),
				{
					root: ['./src'],
					alias: {
						'@weather/general': './src/General',
						'@weather/navigation': './src/Navigation',
						'@weather/screens': './src/Screens',
						'@weather/states': './src/General/States',
					},
				},
			],
			'@babel/plugin-proposal-export-namespace-from',
			'react-native-reanimated/plugin',
		],
	};
};
