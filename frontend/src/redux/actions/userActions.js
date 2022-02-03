import actionTypes from "./actionTypes";
import { authUser, registerUser } from "../../services/userServices";

// todas las acciones de usuarios declarar aqui
export const userLogin = (email = "", password = "") => {
  return async (dispatch) => {
    console.log("en action");
    try {
      dispatch({ type: actionTypes.USER_STARTED });
      const data = await authUser(email, password);
      console.log(data);
      dispatch({
        type: actionTypes.USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const registerUsers = (name, email, password) => {
  return async (dispatch) => {
    console.log("en action registro usuario");
    try {
      dispatch({
        type: actionTypes.REGISTER_USER_REQUEST,
      });
      const data = await registerUser(name, email, password);
      dispatch({
        type: actionTypes.REGISTER_USER_SUCCESS,
        payload: data,
      });

    } catch (error) {
      dispatch({
        type: actionTypes.USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
