import { Axios } from "axios";
import { useContext, useReducer ,createContext} from "react"
import {reducer,initialState} from "./state/useReducer"

export const AllContext = createContext();

const mainContext = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const getData = async (url) => {
        dispatch({ type: "FETCHING_START" });
        try {
          const res = await Axios.get(url);
          const data= await res.data;
          // console.log(data);
          dispatch({ type: "FETCHING_SUCCESS", payload: data });
        } catch (error) {
          dispatch({ type: "FETCHING_ERROR", payload:error.message });
        }
      };

      return (
        <AllContext.Provider value={{ ...state, getData }}>
          {children}
        </AllContext.Provider>
      );
    

}


//    custom hook

export const useProducts = () => {
    const context = useContext(AllContext)
    return context
}