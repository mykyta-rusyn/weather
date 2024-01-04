import {Appearance} from 'react-native';
import {DefaultTheme, Theme} from '@react-navigation/native';

import {RootState} from '../../store';

import {State, Type} from './types';

import {createSlice} from '@reduxjs/toolkit';

const darkTheme: Theme = {
	dark: true,
	colors: {
		...DefaultTheme.colors,
		background: '#222222',
		card: '#3F51B5',
		primary: '#333333',
		text: '#FFFFFF'
	}
};
const lightTheme: Theme = {
	dark: false,
	colors: {
		...DefaultTheme.colors,
		background: '#F5F5F5',
		card: '#03AC13',
		primary: '#FFFFFF',
		text: '#FFFFFF'
	}
};

const initialState: State = {
	theme: Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
};

const baseSlice = createSlice<State, Type, 'baseSlice'>({
	name: 'baseSlice',
	initialState,
	reducers: {
		setTheme(state, action) {
			if (action.payload) {
				state.theme = action.payload;
			}
		},
		toggleTheme(state) {
			state.theme = state.theme.dark ? lightTheme : darkTheme;
		}
	},
});

export const baseReducer = baseSlice.reducer;

export const actions = baseSlice.actions;

export const selectors = {
	selectTheme(state: RootState): Theme {
		return state.baseReducer.theme;
	},
};
