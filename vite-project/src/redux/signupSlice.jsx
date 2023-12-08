// signupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    // Define the initial state for signup here if needed
    errorMessage: '',
    successMessage: '',
  },
  reducers: {
    setSignupErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setSignupSuccessMessage: (state, action) => {
      state.successMessage = action.payload;
    },
    // Other actions related to signup state can be added here
  },
});

export const {
  setSignupErrorMessage,
  setSignupSuccessMessage,
} = signupSlice.actions;

export const selectSignupErrorMessage = (state) => state.signup.errorMessage;
export const selectSignupSuccessMessage = (state) => state.signup.successMessage;

export default signupSlice.reducer;
