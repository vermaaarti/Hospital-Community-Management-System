import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Styles/HospitalList.css";
import bac from "../Assets/Doctor.png";
import { useLocation, useParams } from "react-router-dom";
import Equipments from "./Equipments";

const HospitalList = () => {
  
  const parms = useLocation();
  const search = useParams();
  console.log(search);

    const dataArr = parms.state.data;
    console.log(dataArr[0]);
  
  
  

  return (
    <div className="list-cen">
      {
        dataArr.map((data) => {
          return ( 
          <Card className="list-crd">
          <div className="internal-crd">
            <div className="word-txt">
              <Card.Header as="h5">{data.name}</Card.Header>
              <Card.Body>    
              <Card.Title>Available no. of Equipments</Card.Title>
                <Card.Text> City : {data.address.city} Area : {data.address.Area} landmark : {data.address.landmark}</Card.Text>
                <Card.Text><Equipments state={data[search.category]}  searchval={search.query} /> </Card.Text>
                <Button className = "req-btn "variant="primary">Request</Button>
              </Card.Body>
            </div>
            <div className="hos-img">
              <img src={bac} alt="Hospital" className="list-img" />
            </div>
          </div>
        </Card>
   )
        }
        )
      }

    </div>
  );
};

export default HospitalList;