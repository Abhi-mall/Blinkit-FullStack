import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    allCategory : [],
    loadingCategory : false,
    allSubCategory : [],
    product : []
}

const productSlice = createSlice({
    name : 'product',
    initialState : initialValue,
    reducers : {
        setAllCategory : (state,action)=>{
            state.allCategory = [...action.payload]
        }
      
    }
})

export const  { setAllCategory,setAllSubCategory,setLoadingCategory } = productSlice.actions

export default productSlice.reducer