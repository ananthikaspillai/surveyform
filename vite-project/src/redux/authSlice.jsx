
// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    errorMessage: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setUser, setErrorMessage } = authSlice.actions;
export const {selectUser} = (state) => state.auth.user;
export const {selectErrorMessage} = (state) => state.auth.errorMessage;

export default authSlice.reducer;
