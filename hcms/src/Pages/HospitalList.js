import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Styles/HospitalList.css";
import bac from "../Assets/Doctor.png";

const HospitalList = () => {
  return (
    <div className="list-cen">
      <Card className="list-crd">
        <div className="internal-crd">
          <div className="word-txt">
            <Card.Header as="h5">Hopital Name</Card.Header>
            <Card.Body>
              <Card.Title>Available no. of Equipments</Card.Title>
              <Card.Text>Location with postal area code and landmark</Card.Text>
              <Card.Text></Card.Text>
              <Button className = "req-btn "variant="primary">Request</Button>
            </Card.Body>
          </div>
          <div className="hos-img">
            <img src={bac} alt="Hospital Image" className="list-img" />
          </div>
        </div>
      </Card>

      <Card className="list-crd">
        <div className="internal-crd">
          <div className="word-txt">
            <Card.Header as="h5">Hopital Name</Card.Header>
            <Card.Body>
              <Card.Title>Available no. of Equipments</Card.Title>
              <Card.Text>Location with postal area code and landmark</Card.Text>
              <Card.Text></Card.Text>
              <Button className = "req-btn "variant="primary">Request</Button>
            </Card.Body>
          </div>
          <div className="hos-img">
            <img src={bac} alt="Hospital Image" className="list-img" />
          </div>
        </div>
      </Card>
      <Card className="list-crd">
        <div className="internal-crd">
          <div className="word-txt">
            <Card.Header as="h5">Hopital Name</Card.Header>
            <Card.Body>
              <Card.Title>Available no. of Equipments</Card.Title>
              <Card.Text>Location with postal area code and landmark</Card.Text>
              <Card.Text></Card.Text>
              <Button className = "req-btn "variant="primary">Request</Button>
            </Card.Body>
          </div>
          <div className="hos-img">
            <img src={bac} alt="Hospital Image" className="list-img" />
          </div>
        </div>
      </Card>
      <Card className="list-crd">
        <div className="internal-crd">
          <div className="word-txt">
            <Card.Header as="h5">Hopital Name</Card.Header>
            <Card.Body>
              <Card.Title>Available no. of Equipments</Card.Title>
              <Card.Text>Location with postal area code and landmark</Card.Text>
              <Card.Text></Card.Text>
              <Button className = "req-btn "variant="primary">Request</Button>
            </Card.Body>
          </div>
          <div className="hos-img">
            <img src={bac} alt="Hospital Image" className="list-img" />
          </div>
        </div>
      </Card>
      <Card className="list-crd">
        <div className="internal-crd">
          <div className="word-txt">
            <Card.Header as="h5">Hopital Name</Card.Header>
            <Card.Body>
              <Card.Title>Available no. of Equipments</Card.Title>
              <Card.Text>Location with postal area code and landmark</Card.Text>
              <Card.Text></Card.Text>
              <Button className = "req-btn "variant="primary">Request</Button>
            </Card.Body>
          </div>
          <div className="hos-img">
            <img src={bac} alt="Hospital Image" className="list-img" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HospitalList;
