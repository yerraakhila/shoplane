import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './reducers/CartSlice'
import WishlistSlice from './reducers/WishlistSlice'

//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('reduxState', JSON.stringify(getState()));
        return result;
    };
};

const reHydrateStore = () => {
    if (localStorage.getItem('reduxState') !== null) {
        return JSON.parse(localStorage.getItem('reduxState')); // re-hydrate the store
    }
};

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        wishlist: WishlistSlice
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleware),
})
