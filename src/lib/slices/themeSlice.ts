import { createSlice } from '@reduxjs/toolkit';
import { Theme } from 'config';

interface InitialState {
  theme: Theme;
}

const initialState = {
  theme: 'light',
} satisfies InitialState as InitialState;

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
