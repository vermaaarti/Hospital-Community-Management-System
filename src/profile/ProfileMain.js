import React, { useState } from 'react';
import "../Styles/ProfileMain.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeHospitalAuth, setHospitalData } from '../ReduxCode/Reducers';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import FormData from '../DetailsForm/FormData';
function ProfileMain() {

  const dispatch = useDispatch();
  const redirect=useNavigate();
  const navigateToForm = () => {redirect("./DetailsForm/FormData");};
  
  const reduxState = useSelector((state) => state);
  const auth = reduxState;
  const data = reduxState.hospitalAuth.hospitalData.response;

  console.log(auth);
  console.log(data);

  const logOut = (e) => {
    e.preventDefault();
    dispatch(changeHospitalAuth(false));
    redirect("/")
  }

  return (
    <div className="dashboard">
    <h1 className='dashboard-h1'>Dashboard</h1>

    <div className='card-cont'>
        <div className='card-img'></div>
        <h2 className='card-name moveup'>{data.name}</h2>
        <p className='card-add moveup'><i class="fi-xnsuxm-map-marker-solid"></i>{data.Area},Chhattisgarh,India</p>
        {/* <p className='card-contact moveup'>Contact No. : +1223388483</p> */}
        <p className='card-emaill moveup'>email : {data.email}</p>
    <button onClick={navigateToForm} className='card-btn button-6 moveup'>Update Profile</button>
    </div>

    <div className='list-cont'>
        <h2 className='type-head1'>Equipments</h2>
        <div className='li-heading'>
            <p>S.No.</p>
            <p>Name of Equipment</p>
            <p>Quantity</p>
            <p>Set Price(Rent)</p>
        </div>
        <div className='li'>
            <p>1</p>
            <p>{data.Equipments}</p>
            <p></p>
            <p>22000</p>
        </div>
        
        <h2 className='type-head2'> Medical Ammenities</h2>
        <div className='li-heading'>
            <p>S.No.</p>
            <p>Name of Ammenity</p>
            <p>Quantity</p>
            <p>Set Price(Fixed)</p>
        </div>
        <div className='li'>
            <p>1</p>
            <p>{data.Organs}</p>
            <p>7</p>
            <p>11000</p>
        </div>
    </div>
</div> 

  )
}

export default ProfileMain