// src/redux/authThunks.js

// authThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setUser, setErrorMessage } from '../redux/authSlice';

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:8081/user/login', { email, password });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
