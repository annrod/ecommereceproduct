import { combineReducers } from "redux";
<<<<<<< HEAD
import { productListReducer } from "./productReducers";
import { userConfirmationReducer, reducerUserRegister  } from "./userReducers";

const reducer = combineReducers({
    productList: productListReducer,
    userLog : userConfirmationReducer,
    userSignUp : reducerUserRegister,
=======
import { userConfirmation, reducerUserRegister  } from "./userReducers";
import { productListReducer,productIdReducer, productReviewReducer } from "./productReducers";



const reducer = combineReducers({
    productList: productListReducer,
    loginUser : userConfirmation,
    uRegister : reducerUserRegister,
    productListId : productIdReducer,
    productListId : productReviewReducer,
>>>>>>> 48ffd296b2e4cbec257932f64601aaa42d2a5eac
});


export default reducer;