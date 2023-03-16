import authHeader from "./auth-header";


const initialState = {
  
}
  async function getUserData  () {
  let loginUrl = 'http://localhost:3001/api/v1/user/profile';
   
    
      const response =  await fetch(loginUrl, {
        method: 'POST',
         headers: authHeader(), 
         body: JSON.stringify(initialState),}
       );
        
      const result = await response.json()
        if (result.status === 200)  {
          
        return result
        
      }else{
        throw result
       }
      } 
      
     
    

/** @param {newuserData} object represent the firstName & lastName of the user in the input to put in the db */


export async function changeUserData(newuserData) {
  

  let loginUrl = 'http://localhost:3001/api/v1/user/profile';
  return   await fetch(loginUrl, {
        method: 'PUT',
        headers: { 
        Authorization: 'Bearer ' + localStorage.user,
          "Content-Type": "application/json",
        }, 
        body :  JSON.stringify(newuserData)
       
      }
     );
     
}

export default getUserData;



