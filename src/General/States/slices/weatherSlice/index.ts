import {Actions, Selectors, State} from './types';

import {createSlice} from '@reduxjs/toolkit';

const initialState: State = {
	activePeriod: {
		literal: 'one',
		number: 1
	},
	periods: {
		'0': {
			literal: 'one',
			number: 1
		},
		'1': {
			literal: 'tree',
			number: 3
		},
		'2': {
			literal: 'week',
			number: 7
		},
		'3': {
			literal: 'twoWeek',
			number: 14
		}
	},
	isLoading: false
};

const weatherSlice = createSlice<State, Actions, 'weatherSlice'>({
	name: 'weatherSlice',
	initialState,
	reducers: {
		setActivePeriod(state, action) {
			state.activePeriod = action.payload;
		},
		toggleLoading(state) {
			state.isLoading = !state.isLoading;
		},
		setWeather(state, action) {
			if (action.payload) {
				state.weather = action.payload;
			}
		},
	},
});

export const weatherReducer = weatherSlice.reducer;

type Slice = {
	actions: typeof weatherSlice.actions;
	selectors: Selectors
}

export const weatherState: Slice = {
	actions: weatherSlice.actions,
	selectors: {
		activePeriod(state) {
			return state.weatherReducer.activePeriod;
		},
		periods(state) {
			return state.weatherReducer.periods;
		},
		loading(state) {
			return state.weatherReducer.isLoading;
		},
		weather(state) {
			return state.weatherReducer.weather;
		},
	}
};
