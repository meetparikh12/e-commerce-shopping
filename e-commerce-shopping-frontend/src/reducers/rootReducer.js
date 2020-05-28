import cartReducer from "./cartReducer";
import { combineReducers} from "redux";
import userReducer from "./userReducer";
import productReducer from './productReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    product: productReducer
});

export default rootReducer;