
import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartSlice from "./cartSlice";
export const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispath: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;