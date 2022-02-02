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