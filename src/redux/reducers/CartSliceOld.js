import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItemsNum: 0,
  cartItemsList: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart:(state, action) =>{
      if (state.cartItemsNum === 0) {
        let item = {
          ...action.payload,
          quantity: 1
        };
        state.cartItemsList.push(item);
      } 
      else {
        let check = false;
        state.cartItemsList.map((item, index) => {
          if (item.id === action.payload.id) {
            state.cartItemsList[index].quantity++;
            check = true;
          }
        });
        if (check === false) {
          let item = {
            ...action.payload,
            quantity: 1,
          };
          state.cartItemsList.push(item);
        }
      }
      state.cartItemsNum+=1
    },

    deleteFromCart(state, action){
      state.cartItemsList.map((item, index) => {
        if (item.id === action.payload.id) {
          state.cartItemsNum-=item.quantity
          state.cartItemsList.splice(index, 1)
        }
      })
      
    },
    decrementFromCart(state, action){
      state.cartItemsList.map((item, index) => {
        if (item.id === action.payload.id) {
          if(item.quantity>1){
            state.cartItemsList[index].quantity--
          }
          else{
            state.cartItemsList.splice(index, 1)
          }
          state.cartItemsNum-=1
        }
      })
    }
  }
});

export const { addToCart, deleteFromCart, decrementFromCart} = CartSlice.actions;

export default CartSlice.reducer;
