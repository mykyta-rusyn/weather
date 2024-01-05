import {ThemeType} from '../domain';

import {colors, ThemeColors} from './colors';

import {globalState, useAppDispatch, useAppSelector} from '@weather/states';

type Theme = {
	colors: ThemeColors;
	isDark: boolean;
	setTheme: (theme: ThemeType) => void;
	toggleTheme: () => void
}

export function useTheme(): Theme {
	const theme = useAppSelector(globalState.selectors.theme);
	const dispatch = useAppDispatch();

	return {
		colors: colors[theme],
		isDark: theme === 'dark',
		setTheme: (theme: ThemeType) => dispatch(globalState.actions.setTheme(theme)),
		toggleTheme: () => dispatch(globalState.actions.toggleTheme())
	};
}
