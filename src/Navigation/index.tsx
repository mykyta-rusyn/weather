import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NavParams} from './types';

import {HeaderButtons, useTheme} from '@weather/general';
import {HomeScreen} from '@weather/screens';

const Stack = createStackNavigator<NavParams>();

export const Navigator: React.FC = () => {
	const {colors} = useTheme();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					component={HomeScreen}
					name='HomeScreen'
					options={{
						headerRight: HeaderButtons,
						headerTitleStyle: {
							color: colors.textGray
						},
						headerStyle: {
							backgroundColor: colors.bgGreen
						},
						cardStyle: {
							backgroundColor: colors.bgLight
						}
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
