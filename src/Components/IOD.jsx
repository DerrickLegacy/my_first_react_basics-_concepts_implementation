import React from 'react'
import { Link } from "react-router-dom";
import {Row, Col, Stack} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';


export default function IOD() {
  return (
        <div>
            <Container>
            <Row>
                <Col>
                <Stack direction='horizontal' gap={2}>
                    <Link to="/home">Home</Link>
                    <Link to="/customs">Customs</Link>
                    <Link to="/iod">IOD</Link>
                    <Link to="/iad">IAD</Link>
                </Stack>
                </Col>
            </Row>
            </Container>
            <h1>This is the IOD collection page</h1>
        </div>
  )
}
