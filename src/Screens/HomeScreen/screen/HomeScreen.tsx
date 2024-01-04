import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';

import {Day, periods, PeriodsView} from '../components';

import {Props} from './HomeScreenParams';
import {styles} from './styles';

import {fetchPosition, getWeather, localize, useLocal, WeatherDTO} from '@weather/general';

export const HomeScreen: React.FC<Props> = ({navigation}) => {
	const [period, setPeriod] = React.useState(0);
	const [weather, setWeather] = React.useState<WeatherDTO>();
	const [loading, setIsLoading] = React.useState(true);
	const {currentLang} = useLocal();

	React.useEffect(() => {
		setIsLoading(true);
		navigation.setOptions({
			title: localize(`home_title_${periods.arrayLiteral[period]}`),
		});

		fetchPosition((position) => 
			getWeather(position, periods.arrayNumber[period], currentLang)
				.then(setWeather)
				.then(() => {
					setIsLoading(false);
				})
		);
	}, [currentLang, navigation, period]);

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
				<ScrollView
					children={weather.forecast.forecastday.map((item) => (
						<Day item={item} key={item.date} />
					))}
					contentContainerStyle={styles.rootInner}
					showsVerticalScrollIndicator={false}
				/>
			) : null}
		</View>
	);
};
