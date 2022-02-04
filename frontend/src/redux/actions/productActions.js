import actionTypes from './actionTypes';
import { getProducts, getProductById,createProductReview } from '../../services/productServices';

export const listProducts = (keyword = '', pageNumber = '') => {
    return async (dispatch)=>{
        try{
            dispatch({ 
                type: actionTypes.PRODUCT_LIST_REQUEST});
                const data = await getProducts(keyword, pageNumber);
            dispatch({ 
                type: actionTypes.PRODUCT_LIST_SUCCESS,
                payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
    };

};

export const listProductsId = (id = '') => {
    return async (dispatch) => {
        try{
            dispatch({ 
                type: actionTypes.PRODUCT_LIST_REQUEST});
                const data = await getProductById(id);
            dispatch({ 
                type: actionTypes.PRODUCT_LIST_SUCCESS,
                payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }

    }

}

export const listProductReview = (id = '') => {
    return async (dispatch) => {
        try{
            dispatch({ 
                type: actionTypes.PRODUCT_LIST_REQUEST});
                const data = await createProductReview(id);
            dispatch({ 
                type: actionTypes.PRODUCT_LIST_SUCCESS,
                payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }

    }

}