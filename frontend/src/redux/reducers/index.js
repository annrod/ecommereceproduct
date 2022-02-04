import { combineReducers } from "redux";
import { userConfirmationReducer, reducerUserRegister  } from "./userReducers";
import { productListReducer,productIdReducer, productReviewReducer } from "./productReducers";

const reducer = combineReducers({
    userLog : userConfirmationReducer,
    userSignUp : reducerUserRegister,
    productList: productListReducer,
    productListId : productIdReducer,
    productListId : productReviewReducer,
   
});


export default reducer;