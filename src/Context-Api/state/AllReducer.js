
import { coursesActionTypes ,testimonialActionTypes} from "./actionType"

export const initialState = {
    loading: false,
    data: [],
    error: false,
    singleError:false,
    singleLoading:false,
    singleData :{},
    testimonialData:[]
     
}

export const AllReducer = (state, action) =>{
    switch (action.type) {

           // .........for courses data...........

        case coursesActionTypes.FETCHING_START: {
            return {
                ...state,
                loading: true,
                error: false,
                data:[]
            }
        }

        case coursesActionTypes.FETCHING_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
        }
        case coursesActionTypes.FETCHING_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        // .........for single data...........

        case coursesActionTypes.SINGLE_FETCHING_START: {
            return {
                ...state,
                singleLoading: true,
                singleError: false
            }
        }

        case coursesActionTypes.SINGLE_FETCHING_SUCCESS: {
            return {
                ...state,
                singleLoading: false,
                singleData: action.payload,
                singleError: false
            }
        }

        case coursesActionTypes.SINGLE_FETCHING_ERROR: {
            return {
                ...state,
                singleLoading: false,
                singleError: true
            }
        }

        // .........for testimonial data...........
        
        case testimonialActionTypes.START: {
            return {
                ...state,
                loading: true,
                error: false,
                testimonialData:[]
            }
        }

        case testimonialActionTypes.SUCCESS: {
            return {
                ...state,
                loading: false,
                testimonialData: action.payload,
                error: false
            }
        }
        case testimonialActionTypes.ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
    
        default:
            
        return state;

           
    }

}