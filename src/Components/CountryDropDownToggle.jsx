import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ReactCountryFlag from 'react-country-flag';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { IoReloadCircle } from 'react-icons/io5';

export default function CountryDropDownToggle() {
    const [country, setCountry] = useState('UG');
    const countries = ['UG', 'US', 'AU', 'GB', 'KE', 'TZ'];
    const handleOnClick = (value) => {
        setCountry(value);
    };





    const refresh = () => {
        setCountry('UG');
    };

    return (
        <>
            <Dropdown as={ButtonGroup}>
                <Button variant="light" className="border border-secondary">
                    <ReactCountryFlag
                        countryCode={country}
                        svg
                        style={{
                            width: '30px',
                            height: '30px',
                        }}
                        title={country}
                    />
                    {' Ush 10,000'}
                </Button>
                <Dropdown.Toggle split variant="primary" id="dropdown-custom-2" />
                <Dropdown.Menu style={{ width: '20px' }}>
                    <Dropdown.Item eventKey="1" onClick={() => refresh()}>
                        <IoReloadCircle /> Auto
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    {countries.map((countryCode, index) => (
                        <Dropdown.Item
                            key={index}
                            eventKey={index + 1}
                            drop="down"
                            onClick={() => handleOnClick(countryCode)}
                        >
                            <ReactCountryFlag
                                countryCode={countryCode}
                                svg
                                style={{
                                    width: '20px',
                                    height: '20px',
                                }}
                                title={countryCode}
                            />
                            {' '}
                            {countryCode}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}
