import { combineReducers } from "redux";
<<<<<<< HEAD
import { productListReducer } from "./productReducers";
import { userConfirmation, reducerUserRegister  } from "./userReducers";
=======
import { productListReducer,productIdReducer, productReviewReducer } from "./productReducers";
import { userConfirmation } from "./userReducers";

>>>>>>> Cart

const reducer = combineReducers({
    productList: productListReducer,
    loginUser : userConfirmation,
<<<<<<< HEAD
    uRegister : reducerUserRegister,
=======
    productListId : productIdReducer,
    productListId : productReviewReducer,
>>>>>>> Cart
});


export default reducer;