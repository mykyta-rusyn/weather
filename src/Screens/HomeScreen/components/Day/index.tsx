import React from 'react';
import {Image, Text, View} from 'react-native';

import {styles} from './styles';

import {WeatherDay} from '@weather/general';

type Props = {
	item: WeatherDay
}

export const Day = ({item}: Props): React.ReactElement => {
	console.log('first');

	return (
		<View style={styles.root}>
			<Text style={styles.title}>
				{item.date}
			</Text>

			<View>
				<Text>
					{item.day.condition.text}
				</Text>
				<Image
					source={{uri: item.day.condition.icon}}
					style={styles.image}
				/>
			</View>

			<Text>
				{item.day.daily_chance_of_rain}
			</Text>
			<Text>
				{item.day.maxtemp_c}
			</Text>
			<Text>
				{item.day.mintemp_c}
			</Text>
			<Text>
				{item.day.maxwind_kph}
			</Text>
		</View>
	);
};