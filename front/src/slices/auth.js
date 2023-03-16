
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import {login} from '../services/auth.services'
import { Logout } from "../services/auth.services";


/** User set the storate to put the information and security token in the alocalstorage, if token is inside the user object
 * isLogged in go in True, else it goes in false
 */

const user = localStorage.getItem("user");
const initialState = 
user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };


  /** Login is waiting for login to use it via the store and dispatch via the store the connection to the database base thrw the user
   * 
 * @param {Object} email contains formated data with email & password to permit to access to the userpage
 * */


   export const Login = createAsyncThunk("auth",
   
    async ({ email, password }, thunkAPI) => {
      
        await login(email, password)
        .then(response => response.json())
        .then(response => {
          localStorage.setItem('user',response.body.token)
          
          return { user: response }
        })
        
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