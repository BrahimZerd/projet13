import authHeader from "./auth-header";


const initialState = {
  
}

  async function getUserData  () {

  
    
    let loginUrl = 'http://localhost:3001/api/v1/user/profile';
    
    try {
      const response =  await fetch(loginUrl, {
        method: 'POST',
         headers: authHeader(), 
         body: JSON.stringify(initialState),}
       );
        
      const result = await response.json()
        if (result.status === 200)  {

         
        
       return (result)} else {
        throw result
       }} catch {
        
       }
      
     
    
}


export default getUserData;
