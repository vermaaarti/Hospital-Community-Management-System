import React from "react";
import Card from "react-bootstrap/Card";
import "../Styles/HospitalList.css";
import bac from "../Assets/Doctor.png";
import { useParams } from "react-router-dom";
import Equipments from "./Equipments";
import { getDataFromAPI, postDataToAPI } from '../HelperMethods/APiMethods';
import RootUrl from '../URL';

const HospitalList = () => {

  const searchData = useParams();
  const [dataArr, setDataArr] = React.useState([]);


  React.useEffect(() => {

    getDataFromAPI(`${RootUrl}/searchhospital/${searchData.category}/${searchData.query}`).then((res) => {
      if (!res.isError && res.response)
        setDataArr(res.response);
        console.log(res.response);
    }).catch((err) => console.log(err));

  }, []);



  return (
    <div className="list-cen">
      {
        (dataArr.length > 0) ?

          dataArr.slice(0,1).map((data) => {
            return (
              <Card className="list-crd">
                <div className="internal-crd">
                  <div className="word-txt">
                    <Card.Header as="h5">{data.name  || ""}</Card.Header>
                    <Card.Body>
                      <Card.Title>Available no. of Equipments</Card.Title>
                      <Card.Title>Name : Dani care</Card.Title>

                      <Card.Text> City : Raipur  landmark : gec Raipur</Card.Text>
                      <Card.Text><Equipments state={data} /> </Card.Text>
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