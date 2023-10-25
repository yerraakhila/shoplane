import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistNum: 0,
    wishlistItems: [],
  };

export const WishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state,action) => {
        if (state.wishlistNum === 0) {
            let item = {
              ...action.payload,
              quantity: 1
            };
            state.wishlistItems.push(item);
          } else {
            let check = false;
            state.wishlistItems.map((item, index) => {
              if (item.id === action.payload.id) {
                state.wishlistItems[index].quantity++;
                check = true;
              }
            });
            if (check === false) {
              let item = {
                ...action.payload,
                quantity: 1,
              };
              state.wishlistItems.push(item);
            }
          }
          state.wishlistNum+=1
    },

    deleteFromWishlist: (state, action) => {
      return state.wishlistItems.map((item, index) => {
        if (item.id === action.payload.id){
            state.wishlistItems.splice(index,1)
        }
      })
    }
  }
});

// Action creators are generated for each case reducer function
export const { addToWishlist, deleteFromWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
