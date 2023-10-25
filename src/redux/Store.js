import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './reducers/CartSlice'
import WishlistSlice from './reducers/WishlistSlice'

export const store = configureStore({
    reducer: {
        cart:CartSlice,
        wishlist: WishlistSlice
    }
})
