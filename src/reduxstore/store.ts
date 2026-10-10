import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'

export const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
    },
});



//Iss state ka type export kar rhe hn taaki type safety bni rhe typescript me...
export type RootState = ReturnType<typeof store.getState>;   
export type AppDispatch = typeof store.dispatch;
