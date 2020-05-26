import * as actionTypes from './actionTypes';

export const addCartItem = (product) => {
    return {
        type: actionTypes.ADD_CART_ITEM,
        payload: product
    }
}

export const removeCartItem = (productId)=> {
    return {
        type: actionTypes.REMOVE_CART_ITEM,
        payload: productId
    }
}