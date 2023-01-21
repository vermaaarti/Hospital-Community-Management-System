import React, { useState } from "react";
import "../Styles/ProfileMain.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeHospitalAuth, setHospitalData } from '../ReduxCode/Reducers';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import FormData from '../DetailsForm/FormData';
import AvaliableCategories from "./AvaliableCategories";

function ProfileMain() {
  const dispatch = useDispatch();
  const redirect=useNavigate();
  const navigateToForm = () => {redirect("DetailsForm/FormData");};
  
  const reduxState = useSelector((state) => state);
  const auth = reduxState;
  const data = reduxState.hospitalAuth.hospitalData.response;

  console.log(auth);
  console.log(data);

  const LogOutHandler = (e) => {
    e.preventDefault();
    dispatch(changeHospitalAuth(false));
    redirect("/");
  };

  return (
    <div className="dashboard">
      <h1 className="dashboard-h1">Dashboard</h1>

      <button onClick={LogOutHandler}>Logout</button>

      <button onClick={()=>redirect("/hospital/detailsform")}>Add Eminities</button>

    <div className='card-cont'>
        <div className='card-img'></div>
        <h2 className='card-name moveup'>{data.name}</h2>
        <p className='card-add moveup'><i class="fi-xnsuxm-map-marker-solid"></i> 
             {data.address.landmark} , {data.address.city} , {data.address.pincode}  , India</p>
        <p className='card-emaill moveup'>email : {data.email}</p>
    <button onClick={navigateToForm} className='card-btn button-6 moveup'>Update Profile</button>
    </div>
    <AvaliableCategories dataArray={data} />

    </div>
  );
}

export default ProfileMain;
