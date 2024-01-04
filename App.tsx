import React from 'react';
import {initReactI18next} from 'react-i18next';
import {Provider} from 'react-redux';

import {languages, loadSavedLang, translations} from '@weather/general';
import {Navigator} from '@weather/navigation';
import {store} from '@weather/states';
import {requestForegroundPermissionsAsync} from 'expo-location';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	resources: translations,
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
	supportedLngs: languages
});

export default function App(): React.ReactNode {
	loadSavedLang().then(i18n.changeLanguage);
	requestForegroundPermissionsAsync();

	return (
		<Provider store={store}>
			<Navigator />
		</Provider>
	);
}
