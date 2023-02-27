import axios, { Axios } from "axios";
import { useContext, useReducer ,createContext, useEffect} from "react"
import {AllReducer, initialState} from "./state/AllReducer"
export const mainContext = createContext();


const AllContext = ({children})=>{
  const [state, dispatch] = useReducer(AllReducer,initialState);
  // console.log(state);

   const getData = async (url) => {
        dispatch({ type: "FETCHING_START" });
        try {
          console.log(url)
          const res = await axios.get(url);
          const data= await res.data;
          console.log(data);
          dispatch({ type: "FETCHING_SUCCESS", payload: data });
        } catch (error) {
          dispatch({ type: "FETCHING_ERROR", payload:error.message });
        }
      };

       //--       for single data

  const getSingleData= async (url,id) => {
    // console.log(url)
    dispatch({ type: "SINGLE_FETCHING_START" });
    try {
      console.log(url)
      const res = await axios.get("http://localhost:3000/courses.json");
      const data = await res.data;
      console.log(data);
      const singleData = data.find((item)=>item.id=== Number(id))
      dispatch({ type: "SINGLE_FETCHING_SUCCESS", payload: singleData });
    } catch (error) {
      dispatch({ type: "SINGLE_FETCHING_ERROR", payload:error.message });
    }
  };

    // console.log(state);
      return (
        <mainContext.Provider value={{...state,getData,getSingleData }}>
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