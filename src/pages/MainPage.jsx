import { Card, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Login from "../components/login&register/Login";
import Registration from "../components/login&register/Registration";
import { useState } from "react";

function MainPage() {
  const [display, setDisplay] = useState(false);
  const [status, setStatus] = useState("login");

  const handleMouseEnter = () => {
    setDisplay(true);
  };

  const handleMouseLeave = () => {
    setDisplay(false);
  };

  const childToParent = (childdata) => {
    setStatus(childdata);
  };

  return (
    <>
      <div
        className="head"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {display && <Header childToParent={childToParent} />}
      </div>
      <Row>
        <Col md="8" className="card-img-position">
          <Card style={{ height: "80vh", color: "White" }}>
            <Card.Img
              className="main-page-card"
              src="/images/jaredd-craig-HH4WBGNyltc-unsplash.jpg"
              style={{ height: "80vh", width: "100%" }}
            />
            <Card.ImgOverlay>
              <Card.Title style={{ fontSize: "50px" }}>
                The Library Archive
              </Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>

        <Col md="4">
          <Card>
            <Card.Body>
              {status === "login" ? (
                <Login childToParent={childToParent} />
              ) : (
                <Registration />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default MainPage;
