// signupThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setSignupErrorMessage, setSignupSuccessMessage } from "../redux/signupSlice";

export const signupUser = createAsyncThunk('auth/signupUser', async ({ email, password, username }, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:8081/user/signup', { email, password, username });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Other signup-related thunks can be added here
