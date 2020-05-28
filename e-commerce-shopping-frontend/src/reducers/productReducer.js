import * as actionTypes from '../actions/actionTypes';

const initialState = {
    productList: []
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_PRODUCTS:
            return {
                ...state,
                productList: action.payload
            }
        case actionTypes.DELETE_PRODUCT:
            return {
                ...state,
                productList: state.productList.filter((product)=> product._id !== action.payload)
            }
            default:
                return {
                    ...state
                }
    }
}

export default productReducer;