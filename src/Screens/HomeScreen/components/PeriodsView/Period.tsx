import React from 'react';
import {Pressable, Text} from 'react-native';

import {periods} from './shared';
import {selectedPeriod, styles} from './styles';

import {capitalizeFirst, localize, useTheme} from '@weather/general';

type Props = {
	index: number;
	isSelected: boolean;
	onPress: () => void
}

export const Period: React.FC<Props> = (props) => {
	const {colors} = useTheme();

	return (
		<Pressable
			disabled={props.isSelected}
			style={[
				props.isSelected ? selectedPeriod : styles.period,
				{backgroundColor: colors.bgGreen}
			]}
			onPress={props.onPress}
		>
			<Text>
				{capitalizeFirst(localize(`periods_${periods.arrayLiteral[props.index]}`))}
			</Text>
		</Pressable>
	);
};
