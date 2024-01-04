import React from 'react';
import {useTranslation} from 'react-i18next';

import {Languages, LocalizationKey} from './translations';

import i18n, {StringMap, TFunctionResult, TOptions} from 'i18next';

export type LocalizationFunc<
  TResult extends TFunctionResult = string,
  TInterpolationMap extends object = StringMap,
> = (
  key: LocalizationKey,
  options?: TOptions<TInterpolationMap> | string,
) => TResult;

type Localization = {
  t: LocalizationFunc;
  changeLanguage: (lang: Languages) => void;
  currentLang: Languages
};

export function useLocal(): Localization {
	const {t, i18n} = useTranslation();

	const changeLanguage = React.useCallback(
		(lang: Languages) => {
			i18n.changeLanguage(lang);
		},
		[i18n],
	);

	return {t, changeLanguage, currentLang: i18n.language as Languages};
}

export const localize: LocalizationFunc = i18n.t;
