import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
// import postReducer from "../features/posts/postsSlice";
import usersReducer from '../features/users/usersSlice'
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //rtk query slice defining
    [apiSlice.reducerPath]: apiSlice.reducer,
    users:usersReducer,
  },
  //we have to use middlerware because we have used the rtk query
  middleware: getDefaultMiddleware =>
   getDefaultMiddleware().concat(apiSlice.middleware)
});
