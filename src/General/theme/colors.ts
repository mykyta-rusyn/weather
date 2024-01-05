import {ThemeType} from '../domain';

export type ThemeColors = {
	bgGreen: string;
	bgLight: string;
	themeSwitch: string;
	textGray: string;
	textPrimary: string
}

export const colors: Record<ThemeType, ThemeColors> = {
	dark: {
		bgGreen: '#3F51B5',
		bgLight: '#3F51B550',
		textGray: '#333333',
		textPrimary: '#FFFFFF',
		themeSwitch: '#FAD02C'
	},
	light: {
		bgGreen: '#03AC13',
		bgLight: '#F5F5F5',
		textGray: '#FFFFFF',
		textPrimary: '#FFFFFF',
		themeSwitch: '#333652'
	}
};
