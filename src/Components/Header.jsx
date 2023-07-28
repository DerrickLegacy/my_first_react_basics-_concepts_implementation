import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Header({ childToParent }) {
  const register = 'register';
  const login = 'login';


  return (
    <>
      <div className="page-head">
        <Container>
          <Row>
            <Col>
              <Stack direction="horizontal" gap={2}>
                <Link to="/home">Home</Link>
                <Link to="/customs">Customs</Link>
                <Link to="/io">IOD</Link>
                <Link to="/iad">IAD</Link>
                <Link to="/cart">Cart</Link>


              </Stack>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={10}>
              <h1 className="header-content" id='header-ura'>
                The Library Archive <span>URA</span>
              </h1>
            </Col>
            <Col xs={2}>
              <Stack direction="horizontal" gap={3}>
                <Button className="header-content" variant="primary" onClick={() => childToParent(login)}>
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
    </>
  );
}
