const ADD_ITEMS='add/cartItems'
const DELETE_ITEMS='delete/cartItems'
const INCREASE_QUANITTY_ITEMS='increase/cartItems'
const DECREASE_QUANTITY_ITEMS='decrease/cartItems'


// function increaseItemsQuantity(productId){
//     return {
//    type:INCREASE_QUANITTY_ITEMS,payload:{productId}

//     }
// }
export const additems=(productId,quantity)=>({type:ADD_ITEMS,payload:{productId,quantity}})
export const deleteitems=(productId)=>({type:DELETE_ITEMS,payload:{productId}})
export const increaseItemsQuantity=(productId)=>({type:INCREASE_QUANITTY_ITEMS,payload:{productId} })
export const decreaseItemsQuantity=(productId)=>({type:DECREASE_QUANTITY_ITEMS,payload:{productId} })

export default function cartItemReducer(state=[],action){
    switch(action.type){
        case ADD_ITEMS:
           return [...state,action.payload]
        case DELETE_ITEMS:
            return state.filter((cartItem)=>cartItem.productId!==action.payload.productId)
        case INCREASE_QUANITTY_ITEMS:
            return state.map((cartItem)=>{
                if(cartItem.productId===action.payload.productId){
                    return {...cartItem,quantity:cartItem.quantity+1}
                }
                return cartItem
            })
        case DECREASE_QUANTITY_ITEMS:
            return state.map((cartItem)=>{
                if(cartItem.productId===action.payload.productId){
                    return {...cartItem,quantity:cartItem.quantity-1}
                }
                return cartItem
            }).filter((filteredCartItems)=>filteredCartItems.quantity > 0)
           default:
            return state; 
      }
}