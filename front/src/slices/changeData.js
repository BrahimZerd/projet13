import { changeUserData } from "../services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
   firstName: "",
   lastName: "",
 }

const user = {}

export const changeNames = createAsyncThunk("changeNames", async (arg) => {
   
   return await changeUserData(arg)
    
     .then(response =>{return(response.json())})
})






const changeSlice = createSlice({
  name: "changeNames",
  initialState,
  extraReducers: {
    [changeNames.fulfilled] : (state, action) => {
      console.log(action.payload)
      state.firstName = action.payload.body.firstName
      state.lastName = action.payload.body.lastName
    }
  }
})



const {reducer} = changeSlice
export default reducer;