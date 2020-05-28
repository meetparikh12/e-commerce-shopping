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

export const setUserInfo = (userInfo) => {
    return {
        type: actionTypes.SET_USER_INFO,
        payload: userInfo
    }
}

export const addProduct = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: product
    }
}