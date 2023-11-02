import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './reducers/CartSlice'
import WishlistSlice from './reducers/WishlistSlice'

const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('reduxState', JSON.stringify(getState()));
        return result;
    };
};

const reHydrateStore = () => {
    if (localStorage.getItem('reduxState') !== null) {
        return JSON.parse(localStorage.getItem('reduxState'));
    }
};

export const store = configureStore({
    reducer: {
        wishlist: WishlistSlice,
        cart: CartSlice
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleware),
})
