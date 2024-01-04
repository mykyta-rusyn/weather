import React from 'react';
import {FlatList, View} from 'react-native';

import {Period} from './Period';
import {periods} from './shared';
import {styles} from './styles';

type Props = {
	selectedPeriod: number;
	onPress: (index: number) => void
}

export const PeriodsView: React.FC<Props> = (props) => {
	return (
		<View>
			<FlatList
				horizontal
				contentContainerStyle={styles.root}
				data={periods.arrayLiteral}
				renderItem={({index}) => (
					<Period
						index={index}
						isSelected={index === props.selectedPeriod}
						key={index}
						onPress={() => props.onPress(index)}
					/>
				)}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};
