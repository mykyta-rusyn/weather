import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {useTheme} from '../../theme';

import {styles} from './sharedStyles';

import {globalState, useAppDispatch} from '@weather/states';

export const ThemeButton: React.FC = () => {
	const {colors, isDark} = useTheme();
	const dispatch = useAppDispatch();

	const toggleTheme = React.useCallback(() => {
		dispatch(globalState.actions.toggleTheme());
	}, [dispatch]);

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={toggleTheme}
		>
			<Image
				source={isDark
					? require('./res/dark.png')
					: require('./res/light.png')
				}
				style={styles.image}
				tintColor={colors.themeSwitch}
			/>
		</TouchableOpacity>
	);
};
