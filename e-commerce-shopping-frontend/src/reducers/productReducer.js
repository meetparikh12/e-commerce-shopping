import * as actionTypes from '../actions/actionTypes';

const initialState = {
    productList: []
}
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            const product = [...state.productList, action.payload];
            return {
                ...state,
                productList: product
            }

            default:
                return {
                    ...state
                }
    }
}

export default productReducer;