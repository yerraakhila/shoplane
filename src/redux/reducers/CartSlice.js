import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../helper/user"


const initialState = {
    cartWithUserInfo: []
}
export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let currentUser = getUser()
            let obj = state.cartWithUserInfo.find((o) => o.user === currentUser)
            if (obj) {
                let cartItem = obj.cartInfo.cartItemsList.find((o) => o.id === action.payload.id)
                if (cartItem) {
                    cartItem.quantity++;
                }
                else {
                    let item = {
                        ...action.payload,
                        quantity: 1
                    }
                    obj.cartInfo.cartItemsList.push(item)
                }
                obj.cartInfo.cartItemsNum++
            }
            else {

                let item = {
                    ...action.payload,
                    quantity: 1
                }
                let obj = {
                    user: currentUser,
                    cartInfo: {
                        cartItemsNum: 1,
                        cartItemsList: [item]
                    }
                }
                state.cartWithUserInfo.push(obj)
            }
        },

        deleteFromCart(state, action) {
            let currentUser = getUser()
            let obj = state.cartWithUserInfo.find((o) => o.user === currentUser)
            if (obj) {
                let index = obj.cartInfo.cartItemsList.findIndex(item => item.id === action.payload.id)
                let itemQuantity = obj.cartInfo.cartItemsList[index].quantity
                obj.cartInfo.cartItemsList.splice(index, 1)
                obj.cartInfo.cartItemsNum -= itemQuantity
            }
        },
        decrementFromCart(state, action) {
            let currentUser = getUser()
            let obj = state.cartWithUserInfo.find((o) => o.user === currentUser)
            if (obj) {
                let index = obj.cartInfo.cartItemsList.findIndex(item => item.id === action.payload.id)
                if (action.payload.quantity > 1) {
                    obj.cartInfo.cartItemsList[index].quantity--
                }
                else {
                    obj.cartInfo.cartItemsList.splice(index, 1)
                }
                obj.cartInfo.cartItemsNum--
            }
        }
    }
});

export const currUserCartItemsNum = state => {
    let currentUser = getUser();
    let obj = state.cart.cartWithUserInfo.find((o) => o.user === currentUser)
    if (obj) {
        return obj.cartInfo.cartItemsNum
    }
    return 0
}
export function currUserCartItemsList(state) {
    let currentUser = getUser();
    let obj = state.cart.cartWithUserInfo.find((o) => o.user === currentUser)
    if (obj) {
        return obj.cartInfo.cartItemsList
    }
    return []
}
export const { addToCart, deleteFromCart, decrementFromCart } = CartSlice.actions;

export default CartSlice.reducer;
