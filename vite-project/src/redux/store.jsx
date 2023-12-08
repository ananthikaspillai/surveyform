

// store.js
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from "../redux/authSlice";

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });

// export default store;


// store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import signupSlice from './signupSlice';

const store = configureStore({
  reducer: {
    login: authSlice,
    signup: signupSlice,
  },
});

export default store;
