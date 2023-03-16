import { changeUserData } from "../services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
   firstName: "",
   lastName: "",
 }

/** changeNames is waiting for changeUserData to use it via the store and dispatch the new data on the components
 * @param {Object} arg contains formated data with firstname & lastName to be return to change them
 * */


export const changeNames = createAsyncThunk("changeNames", async (arg) => {
   
   return await changeUserData(arg)
    
     .then(response =>{return(response.json())})
})






const changeSlice = createSlice({
  name: "changeNames",
  initialState,
  extraReducers: {
    [changeNames.fulfilled] : (state, action) => {
      
      state.firstName = action.payload.body.firstName
      state.lastName = action.payload.body.lastName
    }
  }
})



const {reducer} = changeSlice
export default reducer;