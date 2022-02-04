import { combineReducers } from "redux";
import { userConfirmation, reducerUserRegister  } from "./userReducers";
import { productListReducer,productIdReducer, productReviewReducer } from "./productReducers";



const reducer = combineReducers({
    productList: productListReducer,
    loginUser : userConfirmation,
    uRegister : reducerUserRegister,
    productListId : productIdReducer,
    productListId : productReviewReducer,
});


export default reducer;