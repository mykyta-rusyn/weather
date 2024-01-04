import AsyncStorage from '@react-native-async-storage/async-storage';
import {Theme} from '@react-navigation/native';

const themeKey = 'weather_app_theme';

export function loadSavedTheme(): Promise<Theme | null> {
	return AsyncStorage.getItem(themeKey)
		.then((theme) => theme && JSON.parse(theme));
}

export function saveTheme(theme: Theme): Promise<void> {
	return AsyncStorage.setItem(themeKey, JSON.stringify(theme));
}
