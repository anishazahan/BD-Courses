
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
                error: false
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

        case actionTypes.FETCHING_START: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
    
        default:
            
        return state;

           
    }

}