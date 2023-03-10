import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../slices/auth";
import messageReducer from "../slices/message";
import dataReducer from "../slices/userData"
import changeDataReducer from '../slices/changeData'




const reducer = {
  auth: authReducer,
  message: messageReducer,
  data: dataReducer,
  change: changeDataReducer,
 
}
//ajout du middlware supprimer si bug
const store = configureStore({
  reducer: reducer,
  devTools: true,
  
  
})

export default store;


