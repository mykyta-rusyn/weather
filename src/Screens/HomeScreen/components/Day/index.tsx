import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

import {localize, WeatherDay} from '@weather/general';
import {State, useAppSelector} from '@weather/states';

type Props = {
	item: WeatherDay
}

export const Day: React.FC<Props> = ({item}): React.ReactElement => {
	const {colors} = useAppSelector(State.selectors.selectTheme);

	return (
		<View style={styles.root}>
			<Text style={[styles.title, {backgroundColor: `${colors.card}80`}]}>
				{localize('date', {itemDate: item.date})}
			</Text>
			<Text>
				{localize('condition', {condition: item.day.condition.text})}
			</Text>
			<Text>
				{localize('chance_of_rain', {chance: item.day.daily_chance_of_rain})}
			</Text>
			<Text>
				{localize('max_temp', {temp: item.day.maxtemp_c})}
			</Text>
			<Text>
				{localize('min_temp', {temp: item.day.mintemp_c})}
			</Text>
			<Text>
				{localize('max_wind', {wind: item.day.maxwind_kph})}
			</Text>
		</View>
	);
};