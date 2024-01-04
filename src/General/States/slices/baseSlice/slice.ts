import {RootState} from '../../store';

import {State, Type} from './types';

import {createSlice} from '@reduxjs/toolkit';

const initialState: State = {
	isLoggedIn: true,
};

const baseSlice = createSlice<State, Type, 'baseSlice'>({
	name: 'baseSlice',
	initialState,
	reducers: {
		setIsLogged(state, action) {
			state.isLoggedIn = action.payload.isLoggedIn;
		},
	},
});

export const baseReducer = baseSlice.reducer;

const selectIsLoggedIn = (state: RootState): boolean =>
	state.baseReducer.isLoggedIn;

export const actions = {
	...baseSlice.actions,
	selectIsLoggedIn,
};
