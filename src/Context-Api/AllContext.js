import axios, { Axios } from "axios";
import { useContext, useReducer ,createContext, useEffect} from "react"
import {AllReducer, initialState} from "./state/AllReducer"

export const mainContext = createContext();
const api = "courses.json"

const AllContext = ({children})=>{
  const [state, dispatch] = useReducer(AllReducer,initialState);
  // console.log(state);

   const getData = async (url) => {
        dispatch({ type: "FETCHING_START" });
        try {
          const res = await axios.get(url);
          const data= await res.data;
          console.log(data);
          dispatch({ type: "FETCHING_SUCCESS", payload: data });
        } catch (error) {
          dispatch({ type: "FETCHING_ERROR", payload:error.message });
        }
      };

      const value = {
        state, dispatch
    }

    useEffect(() => {
      getData(api);
    }, []);

      return (
        <mainContext.Provider value={{value,getData }}>
          {children}
        </mainContext.Provider>
      );
    

}


//    custom hook

export const useAllContext = () => {
    const context = useContext(mainContext)
    return context
}

export default AllContext;