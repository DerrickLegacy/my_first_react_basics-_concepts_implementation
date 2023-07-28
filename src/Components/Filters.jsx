import React from 'react'
import { Card } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { GiCancel } from 'react-icons/gi';


export default function Filters() {
    const filters = [
        'Domestic Tax',
        'Customs',
        'Tax Incentives',
        'eService',
        'Careers',
        'Legal And Policy',
        'Statistics',
        'Bid Notices',
        'Press Release'
    ];

    const [selectedFilter, setSelectedFilter] = useState('');

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };
    const handleFilterRemove = () => {
        setSelectedFilter()
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Filters</Card.Title>
                    {selectedFilter ? (
                        <InputGroup key={selectedFilter} className="mb-3">
                            <GiCancel
                                size={37}
                                style={{ backgroundColor: 'lightgray', color: 'red', cursor: 'pointer', marginRight: '5px' }}
                      
                                onClick={() => handleFilterRemove()}
                            />
                            <Form.Control disabled placeholder={selectedFilter} />
                        </InputGroup>
                    ) : null}
                    <hr />
                    {filters.map((filter) => {
                        return (
                            <InputGroup key={filter} className="mb-3">
                                <InputGroup.Checkbox
                                    checked={selectedFilter === filter}
                                    onChange={() => handleFilterChange(filter)}
                                />
                                <Form.Control disabled placeholder={filter} />
                            </InputGroup>
                        );
                    })}
                </Card.Body>
            </Card>
        </>
    );
}
