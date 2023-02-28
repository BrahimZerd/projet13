import React   from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Data from '../slices/auth'
import getUserData from '../services/user.service';
import { useReducer } from 'react';


export default function mainUser() {
  const user = localStorage.getItem("user")
  const [dataUser, setData] = useState([])
  
 

  const dispatch = useDispatch()
 

  useEffect(() => {
    getUserData().then(
      (response) => {
        setData(response.body);
       
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setData(_content);
      }
    );
  }, []);

 


    
     
      

      




    return(
      dataUser?
        <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{dataUser.firstName} {dataUser.lastName} !</h1>
        <button className="edit-button">Edit Name</button>
        <div style={{display: "flex", justifyContent:"center"}}>
        <input placeholder={dataUser.firstName}></input>
        <input placeholder={dataUser.lastName}></input>
        
        </div>
        <div style={{display: "flex", justifyContent:"center"}}>
        <button>Save</button>
        <button>Cancel</button>
        
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>:
     <div></div>
    )
}