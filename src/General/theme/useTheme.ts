import {ThemeType} from '../domain';

import {colors, ThemeColors} from './colors';

import {State, useAppDispatch, useAppSelector} from '@weather/states';

type Theme = {
	colors: ThemeColors;
	isDark: boolean;
	setTheme: (theme: ThemeType) => void;
	toggleTheme: () => void
}

export function useTheme(): Theme {
	const theme = useAppSelector(State.selectors.theme);
	const dispatch = useAppDispatch();

	return {
		colors: colors[theme],
		isDark: theme === 'dark',
		setTheme: (theme: ThemeType) => dispatch(State.actions.setTheme(theme)),
		toggleTheme: () => dispatch(State.actions.toggleTheme())
	};
}
