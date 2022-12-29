import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Styles/HospitalList.css";
import bac from "../Assets/Doctor.png";
import {  useParams } from "react-router-dom";
import Equipments from "./Equipments";
import { getDataFromAPI } from '../HelperMethods/APiMethods';
import RootUrl from '../URL';

const HospitalList = () => {
  
  const searchData = useParams();
  const [dataArr , setDataArr]=React.useState([]);

    getDataFromAPI(`${RootUrl}/searchhospital/${searchData.category}/${searchData.query}`).then((res) => {
      console.log(res);
      const data=res.response;
    }).catch((err) => console.log(err) );

    React.useEffect(()=>{

      getDataFromAPI(`${RootUrl}/searchhospital/${searchData.category}/${searchData.query}`).then((res) => {
        if(!res.isError && res.response)
          setDataArr(res.response);
      }).catch((err) => console.log(err) );
         
    },[]);
  
  
  

  return (
    <div className="list-cen">
      {
        (dataArr.length>0) ?

        dataArr.map((data) => {
          return ( 
          <Card className="list-crd">
          <div className="internal-crd">
            <div className="word-txt">
              <Card.Header as="h5">{data.name}</Card.Header>
              <Card.Body>    
              <Card.Title>Available no. of Equipments</Card.Title>
                <Card.Text> City : {data.hospitalId.address.city} Area : {data.hospitalId.address.Area} landmark : {data.hospitalId.address.landmark}</Card.Text>
                <Card.Text><Equipments state={data} /> </Card.Text>
                <Button className = "req-btn "variant="primary">Request</Button>
              </Card.Body>
            </div>
            <div className="hos-img">
              <img src={bac} alt="Hospital" className="list-img" />
            </div>
          </div>
        </Card>
        ) 
  
        }) : <></>

      }

    </div>
  );
};

export default HospitalList;