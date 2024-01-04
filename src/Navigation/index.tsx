import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NavParams} from './types';

import {HomeScreen} from '@weather/screens';

const Stack = createStackNavigator<NavParams>();

export const Navigator: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					component={HomeScreen}
					name='HomeScreen'
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
