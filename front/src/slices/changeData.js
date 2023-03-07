import { changeUserData } from "../services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
   firstName: "",
   lastName: "",
 }

const user = {}

export const changeNames = createAsyncThunk("changeNames", async () => {
   return await changeUserData()
     .then(response => response.json())
     
     
    })




const changeSlice = createSlice({
    name: "data",
    initialState,
    extraReducers: {
        [changeNames.fulfilled] : (state,action) => {
          
            state.firstName = action.meta.arg.newFirstName
           state.lastName = action.meta.arg.newLastName
            console.log(action)
            console.log(state)
            
    }
    }
})


const { reducer } = changeSlice;

export default reducer;