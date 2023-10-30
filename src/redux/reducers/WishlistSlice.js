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
                let wishlistItem = obj.wishlistInfo.wishlistItemsList.find((o) => o.id === action.payload.id)
                if (wishlistItem) {
                    wishlistItem.quantity++;
                }
                else {
                    let item = {
                        ...action.payload,
                        quantity: 1
                    }
                    obj.wishlistInfo.wishlistItemsList.push(item)
                }
                obj.wishlistInfo.wishlistItemsNum++
            }
            else {

                let item = {
                    ...action.payload,
                    quantity: 1
                }
                let obj = {
                    user: currentUser,
                    wishlistInfo: {
                        wishlistItemsNum: 1,
                        wishlistItemsList: [item]
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
                let itemQuantity = obj.wishlistInfo.wishlistItemsList[index].quantity
                obj.wishlistInfo.wishlistItemsList.splice(index, 1)
                obj.wishlistInfo.wishlistItemsNum -= itemQuantity
            }
        },
        decrementFromWishlist(state, action) {
            let currentUser = getUser()
            let obj = state.wishlistWithUserInfo.find((o) => o.user === currentUser)
            if (obj) {
                let index = obj.wishlistInfo.wishlistItemsList.findIndex(item => item.id === action.payload.id)
                if (action.payload.quantity > 1) {
                    obj.wishlistInfo.wishlistItemsList[index].quantity--
                }
                else {
                    obj.wishlistInfo.wishlistItemsList.splice(index, 1)
                }
                obj.wishlistInfo.wishlistItemsNum--
            }
        }
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
export const { addToWishlist, deleteFromWishlist, decrementFromWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
