import { combineReducers } from "redux";
import { productListReducer } from "./productReducers";
import { userConfirmationReducer, reducerUserRegister  } from "./userReducers";

const reducer = combineReducers({
    productList: productListReducer,
    userLog : userConfirmationReducer,
    userSignUp : reducerUserRegister,
});


export default reducer;