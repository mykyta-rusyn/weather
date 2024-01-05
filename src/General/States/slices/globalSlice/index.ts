import {Appearance} from 'react-native';

import {Actions, Selectors, State} from './types';

import {createSlice} from '@reduxjs/toolkit';

const initialState: State = {
	theme: Appearance.getColorScheme() ?? 'light',
};

const globalSlice = createSlice<State, Actions, 'globalSlice'>({
	name: 'globalSlice',
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

export const globalReducer = globalSlice.reducer;

type Slice = {
	actions: typeof globalSlice.actions;
	selectors: Selectors
}

export const globalState: Slice = {
	actions: globalSlice.actions,
	selectors: {
		theme(state) {
			return state.globalReducer.theme;
		}
	}
};
