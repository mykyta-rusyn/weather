import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useAppSelector} from '../General/States/reduxHooks';

import {NavParams} from './types';

import {HeaderButtons} from '@weather/general';
import {HomeScreen} from '@weather/screens';
import {State} from '@weather/states';

const Stack = createStackNavigator<NavParams>();

export const Navigator: React.FC = () => {
	const theme = useAppSelector(State.selectors.selectTheme);

	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator>
				<Stack.Screen
					component={HomeScreen}
					name='HomeScreen'
					options={{
						headerRight: HeaderButtons,
						headerTitleStyle: {
							color: theme.colors.text
						}
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
