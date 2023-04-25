import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import tutorialReducer from './slices/tutorials';
const reducer = {
  auth: authReducer,
  message: messageReducer,
  tutorials: tutorialReducer
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
