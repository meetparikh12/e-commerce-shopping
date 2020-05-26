import * as actionTypes from './actionTypes';

export const addCartItem = (product, quantity) => {
    return {
        type: actionTypes.ADD_CART_ITEM,
        payload: {
            product,
            quantity
        }
    }
}

export const removeCartItem = (productId)=> {
    return {
        type: actionTypes.REMOVE_CART_ITEM,
        payload: productId
    }
}