import React from 'react';
import {FlatList, ListRenderItemInfo, Pressable, Text, View} from 'react-native';

import {selectedPeriod, styles} from './styles';

import {capitalizeFirst, localize, Period, useTheme} from '@weather/general';
import {useAppDispatch, useAppSelector, weatherState} from '@weather/states';

export const PeriodList: React.FC = React.memo(() => {
	const activePeriod = useAppSelector(weatherState.selectors.activePeriod);
	const periods = useAppSelector(weatherState.selectors.periods);
	
	const renderItem = React.useCallback(({item}: ListRenderItemInfo<Period>) => {
		return (
			<PeriodView
				isSelected={activePeriod.literal === item.literal}
				period={item}
			/>
		);
	}, [activePeriod]);

	return (
		<View>
			<FlatList
				horizontal
				contentContainerStyle={styles.root}
				data={Object.values(periods)}
				renderItem={renderItem}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
});

type PeriodViewProps = {
	isSelected: boolean;
	period: Period
}

const PeriodView: React.FC<PeriodViewProps> = React.memo((props) => {
	const {colors} = useTheme();
	const dispatch = useAppDispatch();

	const onPress = React.useCallback(() => {
		dispatch(weatherState.actions.setActivePeriod(props.period));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.period]);

	return (
		<Pressable
			disabled={props.isSelected}
			style={[
				props.isSelected ? selectedPeriod : styles.period,
				{backgroundColor: colors.bgGreen}
			]}
			onPress={onPress}
		>
			<Text>
				{capitalizeFirst(localize(`periods_${props.period.literal}`))}
			</Text>
		</Pressable>
	);
});
