import React from "react";
import "../Styles/MainPage.css";
import "../Styles/Request.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import cardio from "../Assets/Cardiogram.png";
import service from "../Assets/service.png";


const MainPage = () => {
  return (
    <>
      <section className="bg-img">
        <div className="bg-content">
          <h2>Welcome To HCMS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="read-more">Read more</button>
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "26rem", height: "18rem" }}>
               <img class= "crd-img" src ={cardio} alt="card-img"/>
                <Card.Body>
                  <Card.Title>Hospitality</Card.Title>
                  <Card.Text>
                  Clinical excellence must be the priority for any health care service provider.
                  </Card.Text>
                  <Button variant="primary">Apply for Resources</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "26rem", height: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "26rem", height: "18rem" }}>
                <img src={service} class="crd-img" alt
                ="card-img"style={{width:"9rem",height:
                "7rem" }}/>
                <Card.Body>
                  <Card.Title>Our Services</Card.Title>
                  <Card.Text>
                    
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainPage;
