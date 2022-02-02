import { combineReducers } from "redux";
import { productListReducer } from "./productReducers";
import { userConfirmation } from "./userReducers";


const reducer = combineReducers({
    productList: productListReducer,
    loginUser : userConfirmation,
});


export default reducer;