import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {useLocal} from '../../localization';

import {styles} from './sharedStyles';

import i18next from 'i18next';

export const LanguageButton: React.FC = () => {
	const {currentLang} = useLocal();

	const toggleLanguage = React.useCallback(() => {
		i18next.changeLanguage(currentLang === 'en' ? 'uk' : 'en');
	}, [currentLang]);

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={toggleLanguage}
		>
			<Image
				source={currentLang === 'en'
					? require('./res/en.png')
					: require('./res/uk.png')
				}
				style={styles.image}
			/>
		</TouchableOpacity>
	);
};
