//action types
const ADD_ITEMS = "add/cartItems";
const DELETE_ITEMS = "delete/cartItems";
const INCREASE_QUANITTY_ITEMS = "increase/cartItems";
const DECREASE_QUANTITY_ITEMS = "decrease/cartItems";

// function increaseItemsQuantity(productId){
//     return {
//    type:INCREASE_QUANITTY_ITEMS,payload:{productId}

//     }
// }
//action Creators
export const additems = (ProductData) => ({
  type: ADD_ITEMS,
  payload: ProductData,
});
export const deleteitems = (productId) => ({
  type: DELETE_ITEMS,
  payload: { productId },
});
export const increaseItemsQuantity = (productId) => ({
  type: INCREASE_QUANITTY_ITEMS,
  payload: { productId },
});
export const decreaseItemsQuantity = (productId) => ({
  type: DECREASE_QUANTITY_ITEMS,
  payload: { productId },
});

//reducer
export default function cartItemReducer(state = [], action) {
  switch (action.type) {
    case ADD_ITEMS:
      const existingItem = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if(existingItem) {
        return state.map((cartItem) =>
          cartItem.productId === existingItem.productId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];

    case DELETE_ITEMS:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );
    case INCREASE_QUANITTY_ITEMS:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
    case DECREASE_QUANTITY_ITEMS:
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((filteredCartItems) => filteredCartItems.quantity > 0);
    default:
      return state;
  }
}
