import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";


export default function Header({ childToParent }) {
  const register = "register";
  const login = "login";

  return (
    <>
      <Container style={{ marginTop: "10px" }}>
        <Row>
          <Col md={1}>
            <img src="/images/ura_logo_25.png" alt="" />
          </Col>
          <Col md={11}>
            <div className="page-head">
              <Container>
                <Row>
                  <Col xs={10}>
                    <h1 className="header-content" id="header-ura">
                      The Library Archive <span>URA</span>
                    </h1>
                  </Col>
                  <Col xs={2}>
                    <Stack direction="horizontal" gap={3}>
                      <Button
                        className="header-content"
                        variant="primary"
                        onClick={() => childToParent(login)}
                      >
                        Login
                      </Button>
                      <Button
                        className="header-content"
                        variant="primary"
                        onClick={() => childToParent(register)}
                      >
                        Register
                      </Button>
                    </Stack>
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
