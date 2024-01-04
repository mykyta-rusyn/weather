import en from './en/en.json';

export const translations = {
	en: {
		translation: en,
	},
};

type LocalizationEnKey = keyof typeof translations.en.translation;
export type WithoutPlurals<K> = K extends `${infer B}_${
  | 'zero'
  | 'one'
  | 'two'
  | 'few'
  | 'many'
  | 'other'}`
  ? B | K
  : K;
export type LocalizationKey = WithoutPlurals<LocalizationEnKey>;
export type Languages = keyof typeof translations;
export const languages = Object.keys(translations);
