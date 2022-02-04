import { combineReducers } from "redux";
import { productListReducer,productIdReducer, productReviewReducer } from "./productReducers";
import { userConfirmation } from "./userReducers";


const reducer = combineReducers({
    productList: productListReducer,
    loginUser : userConfirmation,
    productListId : productIdReducer,
    productListId : productReviewReducer,
});


export default reducer;