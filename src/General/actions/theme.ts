import AsyncStorage from '@react-native-async-storage/async-storage';

import {ThemeType} from '../domain';

const themeKey = 'weather_app_theme';

export function loadSavedTheme(): Promise<ThemeType> {
	return AsyncStorage.getItem(themeKey)
		.then((theme) => theme as ThemeType ?? 'light');
}

export function saveTheme(theme: ThemeType): Promise<void> {
	return AsyncStorage.setItem(themeKey, theme);
}
