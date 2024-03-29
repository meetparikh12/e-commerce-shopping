import * as actionTypes from '../actions/actionTypes';
const initialState = {
    cartProduct: []
}

const cartReducer = (state=initialState,action) => {
    switch (action.type) {
        case actionTypes.ADD_CART_ITEM:
            let cartItems = [...state.cartProduct, action.payload];
            return {
                ...state,
                cartProduct: cartItems
            }
            
        case actionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartProduct: state.cartProduct.filter((item)=> item._id !== action.payload)
            }
        
        case actionTypes.CLEAR_CART:
            return {
                cartProduct: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default cartReducer;