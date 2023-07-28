import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './SearchBar';
import { Button, Stack } from 'react-bootstrap';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useState } from 'react';
import SearchListItem from './SearchListItem';
import { Breadcrumb } from 'react-bootstrap';

const HeaderSearchBar = () => {
    const [results, setResults] = useState([]);
    const [inputText, setInputText] = useState('');

    const searcListItems = (results, inputText) => {
        setResults(results);
        setInputText(inputText);
    };

    console.log(inputText);
    return (
        <div className='header-search-bar-main'>
            <Container fluid="xxl">
                <Row style={{ backgroundColor: '#2a7fd4', color: 'white' }}>
                    <Col>
                        <em> Developing Uganda Together.</em>
                    </Col>
                </Row>
            </Container>
            <div style={{ backgroundColor: '#043c8c', margin: '2px 0px 0px 0px' }}>
                <Container>
                    <Row>
                        <Col id="header-search-bar">
                            <Row className="header-search-bar">
                                <Col align="center">LOGO</Col>
                            </Row>
                        </Col>
                        <Col xs={7}>
                            <SearchBar searcListItems={searcListItems} />
                        </Col>
                        <Col id="header-search-bar">
                            <Row className="header-search-bar">
                                <Col>
                                    <Row>
                                        <Col align="center" className="cart">
                                            <BsFillCartPlusFill /> | {' '}
                                            <Button variant="secondary">Cart</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            {inputText && results.length > 0 && (
                <Container>
                    <Row className='search-item-list' style={{ justifyContent: 'center', marginTop: '-15px' }}>

                        <Col xs={7}>
                            <SearchListItem results={results} />
                        </Col>
                    </Row>
                </Container>
            )}
            <Container className='link-bar' fluid="xxl">
                <Row style={{ margin: '10px 0 0 20px' }}>
                    <Col>
                        <Stack direction='horizontal' className="breadcrumb-container">
                            <Breadcrumb>
                                <Breadcrumb.Item style={{ marginRight: '40px', textDecoration: 'none' }} href="/">Home</Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb>
                                <Breadcrumb.Item style={{ marginRight: '40px', textDecoration: 'none' }} href="/">D-Tax</Breadcrumb.Item>
                            </Breadcrumb>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeaderSearchBar;
