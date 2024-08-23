import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import regionReducer from './region';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    region: regionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

