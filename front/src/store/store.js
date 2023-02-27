import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";

const reducer = {
  auth: authReducer,
  message: messageReducer,
 
}
//ajout du middlware supprimer si bug
const store = configureStore({
  reducer: reducer,
  devTools: true,
  
  
})

export default store;


