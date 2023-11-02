import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../helper/user"


const initialState = {
    wishlistWithUserInfo: []
}
export const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            let currentUser = getUser()
            let obj = state.wishlistWithUserInfo.find((o) => o.user === currentUser)
            if (obj) {
                obj.wishlistInfo.wishlistItemsList.push(action.payload)
                obj.wishlistInfo.wishlistItemsNum++
            }
            else {
                let obj = {
                    user: currentUser,
                    wishlistInfo: {
                        wishlistItemsNum: 1,
                        wishlistItemsList: [action.payload]
                    }
                }
                state.wishlistWithUserInfo.push(obj)
            }
        },

        deleteFromWishlist(state, action) {
            let currentUser = getUser()
            let obj = state.wishlistWithUserInfo.find((o) => o.user === currentUser)
            if (obj) {
                let index = obj.wishlistInfo.wishlistItemsList.findIndex(item => item.id === action.payload.id)
                obj.wishlistInfo.wishlistItemsList.splice(index, 1)
                obj.wishlistInfo.wishlistItemsNum -= 1
            }
        },
    }
});

export const currUserWishlistItemsNum = state => {
    let currentUser = getUser();
    let obj = state.wishlist.wishlistWithUserInfo.find((o) => o.user === currentUser)
    if (obj) {
        return obj.wishlistInfo.wishlistItemsNum
    }
    return 0
}
export function currUserWishlistItemsList(state) {
    let currentUser = getUser();
    let obj = state.wishlist.wishlistWithUserInfo.find((o) => o.user === currentUser)
    if (obj) {
        return obj.wishlistInfo.wishlistItemsList
    }
    return []
}
export const { addToWishlist, deleteFromWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
