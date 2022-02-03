import actionTypes from '../actions/actionTypes';

export const userConfirmation = (state = {valor : false}, action) => {
    switch (action.type){
        case actionTypes.USER_STARTED:
        return {
            loading : true,
            valor : true
        };
        case actionTypes.USER_FAIL:
            return{
                loading: false,
                error: action.payload
        };
        case actionTypes.USER_SUCCESS:
            return{
                loading: false,
                valor: action.payload
            };
        default:
            return state;
    }         
};


export const reducerUserRegister = (state = {loading : false}, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_USER_REQUEST:
          return { loading: true };
        case actionTypes.REGISTER_USER_SUCCESS:
          return { loading: false, userInfo: action.payload };
        case actionTypes.REGISTER_USER_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
}