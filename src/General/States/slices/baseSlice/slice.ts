import {Appearance} from 'react-native';

import {ThemeType} from '../../../domain';
import {RootState} from '../../store';

import {State, Type} from './types';

import {createSlice} from '@reduxjs/toolkit';

const initialState: State = {
	theme: Appearance.getColorScheme() ?? 'light',
};

const baseSlice = createSlice<State, Type, 'baseSlice'>({
	name: 'baseSlice',
	initialState,
	reducers: {
		setTheme(state, action) {
			state.theme = action.payload;
		},
		toggleTheme(state) {
			state.theme = state.theme === 'dark' ? 'light' : 'dark';
		}
	},
});

export const baseReducer = baseSlice.reducer;

export const actions = baseSlice.actions;

export const selectors = {
	theme(state: RootState): ThemeType {
		return state.baseReducer.theme;
	},
};
