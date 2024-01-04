import React from 'react';
import {initReactI18next} from 'react-i18next';
import {Provider} from 'react-redux';

import {languages, loadSavedLang, loadSavedTheme, translations} from '@weather/general';
import {Navigator} from '@weather/navigation';
import {State, store, useAppDispatch} from '@weather/states';
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

function Init(): React.ReactNode {
	const dispatch = useAppDispatch();
	
	loadSavedTheme().then((theme) => dispatch(State.actions.setTheme(theme)));
	loadSavedLang().then(i18n.changeLanguage);
	requestForegroundPermissionsAsync();

	return <Navigator />;
}

export default function App(): React.ReactNode {
	return (
		<Provider store={store}>
			<Init />
		</Provider>
	);
}
