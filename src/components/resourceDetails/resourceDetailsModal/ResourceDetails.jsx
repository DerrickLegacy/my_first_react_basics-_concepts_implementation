import React from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import { FaFileDownload } from 'react-icons/fa';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function ResourceDetails({ shows, resource_author, resource_header, onHideClick, resource_id, resource_image, description }) {


    return (
        <>
            <Modal
                show={shows}
                size='lg'
                centered>
                <Modal.Header>
                    <Modal.Title>
                        <h6>{'>> '} Resource Id : {resource_id},{' '} Name :{resource_header}</h6>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col sm={4} style={{ height: '350px', border: '1px solid black' }}>
                                <Image alt='resource image' src={resource_image} fluid style={{ height: '100%' }} />
                            </Col>
                            <Col sm={8}>
                                <Tabs>
                                    <Tab eventKey="description" title="Description" style={{ paddingTop: '20px' }}>
                                        <h4>{resource_header}</h4>
                                        <h6>{resource_author}</h6> <hr />
                                        {/* <p>Description:</p> */}
                                        <p>{description}</p>
                                    </Tab>      
                                    <Tab eventKey='author' title="Author" style={{ paddingTop: '20px' }} >
                                        <p><strong>Resource Attachment:</strong>  {resource_author}</p>
                                        <p> <strong>Source or API link ;</strong>  Uganda Revenue Authority</p>
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="outline-secondary">Details <CgDetailsMore size={20} /></Button>{' '} */}
                    <Button variant="outline-success">Download <FaFileDownload size={20} /></Button>{' '}
                    <Button onClick={() => onHideClick(true)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
