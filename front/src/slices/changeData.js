import { changeUserData } from "../services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    firstName: "",
    lastName: "",
}


export const changeNames = createAsyncThunk("changedData", async () => {
       
    await changeUserData()
     .then(response =>    (response.json()))
     .then(response => {console.log (response)})
     

      
       
      
})

const changeSlice = createSlice({
    name: "changedData",
    initialState,
    extraReducers: {
        [changeNames.fulfilled] : (state,action) => {
           console.log(action)
           console.log(state)
        }
    }
})


const { reducer, actions } = changeSlice;

export default reducer;