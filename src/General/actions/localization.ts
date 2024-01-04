import AsyncStorage from '@react-native-async-storage/async-storage';

import {Languages} from '../localization';

const languageKey = 'weather_app_language';

export function loadSavedLang(): Promise<Languages> {
	return AsyncStorage.getItem(languageKey).then((lng) => lng as Languages ?? 'en');
}
