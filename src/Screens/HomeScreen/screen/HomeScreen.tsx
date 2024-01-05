import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';

import {getWeather} from '../actions';
import {Day, PeriodList} from '../components';

import {Props} from './HomeScreenParams';
import {styles} from './styles';

import {fetchPosition, localize, useLocal} from '@weather/general';
import {useAppDispatch, useAppSelector, weatherState} from '@weather/states';

export const HomeScreen: React.FC<Props> = ({navigation}) => {
	const {currentLang} = useLocal();
	const activePeriod = useAppSelector(weatherState.selectors.activePeriod);
	const weather = useAppSelector(weatherState.selectors.weather);
	const loading = useAppSelector(weatherState.selectors.loading);
	const dispatch = useAppDispatch();

	const toggleLoading = React.useCallback(() => {
		dispatch(weatherState.actions.toggleLoading());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	React.useEffect(() => {
		toggleLoading();
		navigation.setOptions({
			title: localize(`home_title_${activePeriod.literal}`),
		});

		fetchPosition((position) => 
			getWeather(position, activePeriod.number, currentLang)
				.then((weather) => dispatch(weatherState.actions.setWeather(weather)))
				.then(toggleLoading)
		);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activePeriod, currentLang, navigation, toggleLoading]);

	return (
		<View style={styles.root}>
			<PeriodList />
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
