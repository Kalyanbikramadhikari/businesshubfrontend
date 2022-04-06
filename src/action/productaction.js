import axios from 'axios'

import { ALL_PRODUCTS_SUCESS,ALL_PRODUCTS_CLEAR_ERRORS,ALL_PRODUCTS_FAIL,ALL_PRODUCTS_REQUEST } from '../constants/productConstants'


export const getProducts = ()=>  async (dispatch)=>{
    try {
        dispatch({
            type: ALL_PRODUCTS_REQUEST
        })
        const {data} = await axios.get('/api/v1/products')
        dispatch({
            type: ALL_PRODUCTS_SUCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// clear errors
export const clearErrrors =  () => async (dispatch)=>{
    dispatch({
        type: ALL_PRODUCTS_CLEAR_ERRORS
    })
}