import { ALL_PRODUCTS_SUCESS,ALL_PRODUCTS_CLEAR_ERRORS,ALL_PRODUCTS_FAIL,ALL_PRODUCTS_REQUEST } from '../constants/productConstants'

export const productsReducers = (state= {products:[]},action )=>{
    switch(action.type){
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case ALL_PRODUCTS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
            case ALL_PRODUCTS_SUCESS:
            return{
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount
            }
            case ALL_PRODUCTS_CLEAR_ERRORS:
                return{
                    ...state,
                    error: null
                }
        default:
            return state;
    }
}