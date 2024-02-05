import React from "react";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col } from "react-bootstrap";
import { HiViewList } from "react-icons/hi";
import { CiViewColumn } from "react-icons/ci";
import Button from "react-bootstrap/Button";
import { FaFileDownload } from "react-icons/fa";
import Details from "../../pages/detailsPage/Details";
import { useState, useEffect } from "react";
import Stack from "react-bootstrap/Stack";
import Filters from "../Filter/Filters";

function Fiction() {
  const [images, setImages] = useState([]);
  const [cards, setCards] = useState(24);
  const img_url = `https://jsonplaceholder.typicode.com/photos?_limit=${cards}`;

  useEffect(() => {
    fetch(img_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      });
  }, [cards, img_url]);
  const handlePage = (pages) => {
    setCards(pages);
  };
  const handleSort = (condition) => {
    if (condition === "alphabetically") {
      const sortedImages = [...images].sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setImages(sortedImages);
    } else if (condition === "id") {
      const sortedImages = [...images].sort((a, b) => {
        return a.id - b.id;
      });
      setImages(sortedImages);
    }
  };

  return (
    <>
      {" "}
      <Container>
        <Stack gap={3}>
          <div className="p-4">First item</div>
        </Stack>
      </Container>
      <Container className="mt-3 mb-3 mr-20% ml-20%">
        <Row>
          <Col sm={3}>
            <Filters />
          </Col>
          <Col sm={9}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                style={{ height: "160px", objectFit: "cover" }} // Set objectFit to 'cover'
                src="/images/guzel-maksutova-B30XL_m3fso-unsplash.jpg"
              />
              <Card.Body>
                <Card.Title className=" mt-10px mb-10px">
                  <h1>Domestic Tax</h1>
                </Card.Title>
                <Card.Subtitle>
                  <Container
                    style={{
                      borderBottom: "1px solid #c9c9c9",
                      fontWeight: "normal",
                    }}
                  >
                    <Stack direction="horizontal" gap={3}>
                      <div className="p-2 ">Showing 1-{cards} of 122</div>
                      <div className="p-2 ms-auto">
                        <Dropdown>
                          <Dropdown.Toggle variant="none" id="dropdown-basic">
                            Display {}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handlePage(24)}>
                              24 per page{" "}
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handlePage(36)}>
                              36 per page
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="p-2 ms-auto">
                        <Dropdown>
                          <Dropdown.Toggle variant="none" id="dropdown-basic">
                            Sort By: {}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() => handleSort("alphabetically")}
                            >
                              A-Z
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSort("id")}>
                              By Id
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="p-2 ms-auto">
                        View <HiViewList size={30} />
                        <CiViewColumn size={30} />
                      </div>
                    </Stack>
                  </Container>
                </Card.Subtitle>
                <Container>
                  <Row
                    style={{
                      borderLeft: "1px solid #c9c9c9",
                      borderBottom: "0.4px  solid #c9c9c9",
                      borderRight: "1px solid #c9c9c9",
                    }}
                  >
                    {images.map((image) => {
                      const description =
                        "This document is part of the source library for NRGI's 2021 Resource Governance Index, a comprehensive measure of the quality of natural resource governance in oil, gas and mineral - rich countries.To access the full dataset and all other index resources, visit https://resourcegovernanceindex.org.";
                      const resource_header = "Domestic Tax Laws 2015";
                      const resource_author = "Uganda Investiment Authority ";

                      return (
                        <>
                          <Col sm={6}>
                            <Card
                              style={{ height: "85vh", margin: "15px 0px" }}
                            >
                              <Card.Img
                                variant="top"
                                className="resource_image"
                                alt="Image load failure"
                                key={image.id}
                                style={{
                                  height: "30vh",
                                  borderBottom: "1px solid #c9c9c9",
                                }}
                                src={image.url}
                              />
                              <Card.Body>
                                <Card.Text>
                                  <h4>
                                    {/* <strong>image.url</strong> */}
                                    <strong>{resource_header}</strong>
                                  </h4>
                                  <p>{resource_author} </p>
                                  Resource Id: <strong>{image.id}</strong>
                                </Card.Text>
                                {/* <div> */}
                                <p>
                                  This Handbook containing an up-to-date
                                  reproduction of Uganda's principal tax laws is
                                  intended for use by Tax Administrators, Tax.
                                  Practitioners, Taxpayers, ...
                                </p>
                                {/* </div> */}
                              </Card.Body>
                              <Card.Footer>
                                <div className="text-center mb-10px">
                                  <Details
                                    description={description}
                                    resource_id={image.id}
                                    resource_image={image.url}
                                    resource_header={resource_header}
                                    resource_author={resource_author}
                                  />{" "}
                                  <Button variant="outline-success">
                                    Download <FaFileDownload size={20} />
                                  </Button>
                                </div>
                              </Card.Footer>
                            </Card>
                          </Col>
                        </>
                      );
                    })}
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Fiction;
