import { createSlice } from "@reduxjs/toolkit";
import getUserData from "../services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { changeNames } from "./changeData";
 export const initialState =  {
   firstName: "",
   lastName: "",
   id:"",
   email:"",
}


const user = {}



export const dataFetch = createAsyncThunk("data", async () => {
    const promise =  await getUserData(user) // fetch avec TOKEN
    .then(response =>  {return  response.body})
     const data = await promise;
      return data  
    })


    

const dataSlice = createSlice({
    name: "data",
    initialState,
    
    extraReducers: {
      
        [dataFetch.fulfilled]: (state, action) => {
         state.firstName = action.payload.firstName
         state.lastName = action.payload.lastName
         state.email = action.payload.email
         state.id = action.payload.id
         
         },
        [dataFetch.rejected]: (state, action) => {
            
        }},
        
});




     const { reducer } = dataSlice;
     

export const { setUser } = dataSlice.actions
export default reducer;
