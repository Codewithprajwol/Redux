import { createSlice } from "@reduxjs/toolkit";

const findItemIndex=(state,action)=>state.findIndex((cartItem)=>cartItem.productId===action.payload.productId)

const slice=createSlice({
  name:'cart',
  initialState:[],
  reducers:{
    additems(state,action){
      const existingItemIndex=findItemIndex(state,action)

      if(existingItemIndex!== -1) {
        state[existingItemIndex].quantity +=1;
    }
    else{
      state.push({...action.payload, quantity:1})
    }
    },
    deleteitems(state,action){
      const existingItemIndex=findItemIndex(state,action)

      state.splice(existingItemIndex,1)
    },
    increaseItemsQuantity(state,action){
      const existingItemIndex=findItemIndex(state,action)
      state[existingItemIndex].quantity += 1;
    },
    decreaseItemsQuantity(state,action){
      const existingItemIndex=findItemIndex(state,action)
  state[existingItemIndex].quantity -=1;

      if(state[existingItemIndex].quantity===0){
        state.splice(existingItemIndex,1)
      }
    },
  }
})
export const {additems,deleteitems,increaseItemsQuantity,decreaseItemsQuantity}=slice.actions
export default slice.reducer