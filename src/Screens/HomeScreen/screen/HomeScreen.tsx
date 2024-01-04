import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';

import {Day, periods, PeriodsView} from '../components';

import {Props} from './HomeScreenParams';
import {styles} from './styles';

import {fetchPosition, getWeather, localize, WeatherDTO} from '@weather/general';

export const HomeScreen: React.FC<Props> = ({navigation}) => {
	const [period, setPeriod] = React.useState(0);
	const [weather, setWeather] = React.useState<WeatherDTO>();
	const [loading, setIsLoading] = React.useState(true);
	
	React.useEffect(() => {
		setIsLoading(true);
		navigation.setOptions({
			title: localize(`home_title_${periods[period]}`)
		});

		fetchPosition((position) => 
			getWeather(position)
				.then(setWeather)
				.then(() => {
					setIsLoading(false);
				})
		);
	}, [navigation, period]);

	return (
		<View style={styles.root}>
			<PeriodsView
				selectedPeriod={period}
				onPress={setPeriod}
			/>
			{loading ? (
				<ActivityIndicator size={'large'} />
			) : null}
			{weather ? (
				<FlatList
					contentContainerStyle={styles.rootInner}
					data={weather.forecast.forecastday}
					renderItem={Day}
				/>
			) : null}
		</View>
	);
};
