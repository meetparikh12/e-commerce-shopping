import cartReducer from "./cartReducer";
import { combineReducers} from "redux";
import userReducer from "./userReducer";
import productReducer from './productReducer';
import shippingReducer from './shippingReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    product: productReducer,
    shipping: shippingReducer
});

export default rootReducer;