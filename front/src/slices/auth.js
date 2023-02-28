
import AuthService from "../services/auth.services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import {login} from '../services/auth.services'
import { Logout } from "../services/auth.services";
import authService from "../services/auth.services";
import getUserData from "../services/user.service";
import { useState } from "react";
const user = localStorage.getItem("user");



const initialState = 


user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };


   export const Login = createAsyncThunk(
    
     
    "auth",
    async ({ email, password }, thunkAPI) => {
      try {
        await login(email, password)
        .then(response => response.json())
        .then(response => {
          localStorage.setItem('user',response.body.token)
          
          return { user: response }
        })
        
       
        


      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );
  
  export const logout = createAsyncThunk("auth/logout", async () => {
     Logout();
  });


  
  
 

  

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer : {
      setCredentials: (state, { payload }) => {
        state.userInfo = payload
      },
    },
    extraReducers: {
      
      [Login.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload;
        
      },
      [Login.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
      [logout.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;

      },
      
     
      
    },
  });

  
  
  const { reducer } = authSlice;
  export default reducer;