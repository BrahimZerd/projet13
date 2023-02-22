import axios from "axios";






const API_URL = "http://localhost:3001/api/v1/"
 const login = (email, password) =>{

  
  let loginBody = {
    email: email,
    password: password,
  };
  let loginUrl = 'http://localhost:3001/api/v1/user/login';
  
  try {
    const response =  fetch(loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginBody),
    });
   
    const result =  response.json();
   localStorage.setItem('user',result.body.token)
    
    console.log(result)
    console.log(localStorage)
    return result.data;
  } catch (err) {
    
   
    return err;
    
  }
  
}

  const logout = () => {
    localStorage.removeItem("user");
  };


  


  

  const authService = {
    
    login,
    logout,
  };
  
  export default authService;