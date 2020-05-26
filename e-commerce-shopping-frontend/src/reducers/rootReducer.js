import cartReducer from "./cartReducer";
import { combineReducers} from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
});

export default rootReducer;