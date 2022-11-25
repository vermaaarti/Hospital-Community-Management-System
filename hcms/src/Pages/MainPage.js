import React from "react";
import "../Styles/MainPage.css";
import "../Styles/Request.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaFacebook, FaAmazon } from "react-icons/fa";

const MainPage = () => {
  return (
    <>
      <section className="bg-img">
        <div className="bg-content">
          <h2>Welcome To HCMS</h2>
          <button className="read-more">Read more</button>
        </div>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: "26rem", height: "18rem" }}>
                <FaFacebook />
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
                <FaAmazon />
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
                <FaAmazon />
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
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MainPage;
