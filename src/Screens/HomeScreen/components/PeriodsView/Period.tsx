import React from 'react';
import {Pressable, Text} from 'react-native';

import {periods} from './shared';
import {selectedPeriod, styles} from './styles';

import {capitalizeFirst, localize} from '@weather/general';

type Props = {
	index: number;
	isSelected: boolean;
	onPress: () => void
}

export const Period: React.FC<Props> = (props) => {
	return (
		<Pressable
			disabled={props.isSelected}
			style={props.isSelected ? selectedPeriod : styles.period}
			onPress={props.onPress}
		>
			<Text>
				{capitalizeFirst(localize(`periods_${periods[props.index]}`))}
			</Text>
		</Pressable>
	);
};
