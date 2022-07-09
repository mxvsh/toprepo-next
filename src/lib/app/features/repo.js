import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selected_lang: 'javascript',
	selected_repo: null,
};

export const repoSlice = createSlice({
	name: 'repos',
	initialState,
	reducers: {
		setSelectedLang: (state, action) => {
			state.selected_lang = action.payload;
		},
		setSelectedRepo: (state, action) => {
			state.selected_repo = action.payload;
		},
	},
});

export const { setSelectedLang, setSelectedRepo } = repoSlice.actions;
export default repoSlice.reducer;
