import { combineReducers } from "redux";
import { productListReducer } from "./productReducers";
import { userConfirmation, reducerUserRegister  } from "./userReducers";

const reducer = combineReducers({
    productList: productListReducer,
    loginUser : userConfirmation,
    uRegister : reducerUserRegister,
});


export default reducer;