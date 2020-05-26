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
            
        default:
            return {
                ...state
            }
    }
}

export default cartReducer;