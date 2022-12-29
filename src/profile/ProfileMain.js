import React from 'react';
import "../Styles/ProfileMain.css";
import { useDispatch } from 'react-redux';
import { changeHospitalAuth, setHospitalData } from '../ReduxCode/Reducers';
import {  useNavigate } from 'react-router-dom';

function ProfileMain() {

  const dispatch = useDispatch();
  const redirect=useNavigate();
  const logOut = (e) => {
    e.preventDefault();
    dispatch(changeHospitalAuth(false));
    redirect("/")
  }

  return (


    <div className='main-profile'>

      <div className="profile p-3 d-flex">
        <button onClick={logOut} >Logout</button>
        <div>
          <img className="img-container" src="https://s3.amazonaws.com/uchealth-wp-uploads/wp-content/uploads/sites/6/2018/01/02032200/UCHealth_Memorial_Hospital_Central_Morning.jpgeee.jpg" /></div>
        <div>
          <h1 className="mt-4">HOSPITAL NAME</h1>
          <h3>Raipur, INDIA</h3>
          <p>Active/Inactive</p>
        </div>
      </div>


      <h1 className="m-3 text-center">Equipments</h1>
      <div className="div">
        <tbody>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td ><img src="" className="img" width="30px;" height="30px;" /></td>
            <td><h3>Ventilator</h3></td>
            <td><h4> 10</h4></td>
            <td><h4> 1000</h4></td>
          </tr>

        </tbody>
      </div>



      <h1 className="m-3 text-center">Medical Amenities</h1>
      <div className="div">
        <tbody>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td ><img src="" className="img" width="30px;" height="30px;" /></td>
            <td><h3>Ventilator</h3></td>
            <td><h4> 10</h4></td>
            <td><h4> 1000</h4></td>
          </tr>
        </tbody>
      </div>



    </div>
  )
}

export default ProfileMain