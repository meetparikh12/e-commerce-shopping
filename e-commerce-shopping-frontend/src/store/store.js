import { createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import Cookie from 'js-cookie';

const cartProduct = Cookie.getJSON("cartItems") || [];
const initialState = {
    cart : {
        cartProduct
    }, 
    shipping: {
        shippingAddress: {},
        paymentMethod: {}
    }
}
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;