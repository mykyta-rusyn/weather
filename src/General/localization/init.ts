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
  currentLang: Languages
};

export function useLocal(): Localization {
	const {i18n} = useTranslation();

	return {currentLang: i18n.language as Languages};
}

export const localize: LocalizationFunc = i18n.t;
