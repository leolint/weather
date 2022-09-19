import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../store/weatherSlice'
import menuReducer from '../store/menuSlice'



export const store = configureStore({
  reducer: {
    weather:dataReducer,
    menu:menuReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})