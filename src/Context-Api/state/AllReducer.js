
import { actionTypes } from "./actionType"

export const initialState = {
    loading: false,
    data: [],
    error: false,
    singleError:false,
    singleLoading:false,
    singleData :{},
    
    
}

export const AllReducer = (state, action) =>{
    switch (action.type) {
        case actionTypes.FETCHING_START: {
            return {
                ...state,
                loading: true,
                error: false,
                data:[]
            }
        }

        case actionTypes.FETCHING_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
        }
        case actionTypes.FETCHING_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        case actionTypes.SINGLE_FETCHING_START: {
            return {
                ...state,
                singleLoading: true,
                singleError: false
            }
        }

        case actionTypes.SINGLE_FETCHING_SUCCESS: {
            return {
                ...state,
                singleLoading: false,
                singleData: action.payload,
                singleError: false
            }
        }

        case actionTypes.SINGLE_FETCHING_ERROR: {
            return {
                ...state,
                singleLoading: false,
                singleError: true
            }
        }
    
        default:
            
        return state;

           
    }

}