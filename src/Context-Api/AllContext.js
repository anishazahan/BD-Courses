import axios, { Axios } from "axios";
import { useContext, useReducer ,createContext, useEffect} from "react"
import {AllReducer, initialState} from "./state/AllReducer"
export const mainContext = createContext();

const blogURL = "blog.json"
const AllContext = ({children})=>{
  const [state, dispatch] = useReducer(AllReducer,initialState);
  // console.log(state);

   const getData = async (url) => {
        dispatch({ type: "FETCHING_START" });
        try {
          // console.log(url)
          const res = await axios.get(url);
          const data= await res.data;
          // console.log(data);
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
      const res = await axios.get(url);
      const data = await res.data;
      console.log(data);
      const singleData = data.find((item)=>item.id=== Number(id))
      dispatch({ type: "SINGLE_FETCHING_SUCCESS", payload: singleData });
    } catch (error) {
      dispatch({ type: "SINGLE_FETCHING_ERROR", payload:error.message });
    }
  };

     //--       for testimonial data

  const getTestimonialData = async (url) => {
    dispatch({ type: "START" });
    try {
      // console.log(url)
      const res = await axios.get(url);
      const testimonialData= await res.data;
      // console.log(testimonialData);
      dispatch({ type: "SUCCESS", payload:testimonialData });
    } catch (error) {
      dispatch({ type: "ERROR", payload:error.message });
    }
  };

    //-- ----      for blogData data
    const getBlogData = async (url) => {
      dispatch({ type: "START_FETCHING" });
      try {
        // console.log(url)
        const res = await axios.get(url);
        const blogData= await res.data;
        // console.log(blogData);
        dispatch({ type: "SUCCESS_FETCHING", payload: blogData });
      } catch (error) {
        dispatch({ type: "ERROR_FETCHING", payload:error.message });
      }
    };



    // console.log(state);
      return (
        <mainContext.Provider value={{...state,getData,getSingleData,getTestimonialData,getBlogData }}>
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