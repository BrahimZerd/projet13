import React   from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { dataFetch } from '../slices/userData';
import { changeUserData } from '../services/user.service';
import { changeNames } from '../slices/changeData';
export default function mainUser() {
  
  const dataUser = useSelector((state) => state.data);
  const changeData = useSelector((state) => state.change);
 

  const dispatch = useDispatch()

  dispatch(dataFetch())
  .then(response => {return  response})
  const EditButton = document.getElementById('edit-button')
  const SaveButton = document.getElementById('save-button')
  
  function showEdit() {

    
    const EditButton = document.getElementById('edit-button')
  const SaveButton = document.getElementById('save-button')
    EditButton.style.display = "none";
    SaveButton.style.display = "block";
  }


  function hideEdit() {


    EditButton.style.display = "initial";
   
    SaveButton.style.display = "none";
  }


  function saveNewUserInfos() {
    
      const newFirstName  = document.getElementById('newfirstName').value;
      const newLastName = document.getElementById('newlastName').value;
      
     dispatch(changeNames({firstName : newFirstName,lastName : newLastName}))
     .then(hideEdit())
    /* .then(setTimeout(() => window.location.reload(), 2000)) */
    
    
      
    }


  return(
      dataUser?
        <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{dataUser.firstName} {dataUser.lastName}  </h1>
        <button className="edit-button" id="edit-button" onClick={showEdit}>Edit Name</button>
        <div  style ={{display: "none"}} id="save-button">
        <div style={{display: "flex", justifyContent:"center"}}>
        <input placeholder={dataUser.firstName}id="newfirstName"></input>
        <input placeholder={dataUser.lastName} id="newlastName"></input>
        
        </div>
        <div  style={{display: "flex", justifyContent:"center"}}>
        <button onClick={saveNewUserInfos}>Save</button>
        <button onClick={hideEdit}>Cancel</button>
        
        </div>
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