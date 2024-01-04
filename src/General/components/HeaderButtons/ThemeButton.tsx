import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {colors} from '../../theme';

import {styles} from './sharedStyles';

import {State, useAppDispatch, useAppSelector} from '@weather/states';

export const ThemeButton: React.FC = () => {
	const isDarkTheme = useAppSelector(State.selectors.selectTheme).dark;
	const dispatch = useAppDispatch();

	const toggleTheme = React.useCallback(() => {
		dispatch(State.actions.toggleTheme());
	}, [dispatch]);

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={toggleTheme}
		>
			<Image
				source={isDarkTheme
					? require('./res/dark.png')
					: require('./res/light.png')
				}
				style={styles.image}
				tintColor={isDarkTheme
					? colors.bg.bgThemeSwitchDark
					: colors.bg.bgThemeSwitchLight
				}
			/>
		</TouchableOpacity>
	);
};
