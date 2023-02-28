





const API_URL = "http://localhost:3001/api/v1/"
 export async function login  (email, password) {

  
  let loginBody = {
    email: email,
    password: password,
  };
  let loginUrl = 'http://localhost:3001/api/v1/user/login';
  
  try {
   
   return fetch(loginUrl, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginBody),
  })

 
    

    


   
    
  

  
  } catch (err) {
    
   
    return err;
    
  }
  
}

  export const Logout = () => {
    localStorage.removeItem("user");
    
  };









  


  

