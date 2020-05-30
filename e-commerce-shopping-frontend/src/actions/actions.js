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

export const getAllProducts = (productList) => {
    return {
        type: actionTypes.GET_ALL_PRODUCTS,
        payload: productList
    }
}

export const deleteProduct = (productId) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: productId
    }
}

export const addShippingDetails = (details)=> {
    return {
        type: actionTypes.ADD_SHIPPING_DETAILS,
        payload: details
    }
}

export const addPaymentMethod = (paymentMethod) => {
    return {
        type: actionTypes.ADD_PAYMENT_METHOD,
        payload: paymentMethod
    }
}