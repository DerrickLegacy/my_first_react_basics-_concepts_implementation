import { FaSearch } from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import { Button } from "react-bootstrap";

const SearchBar = ({searcListItems}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchResult(input);
  });

  // Performing a data Fetch
  const fetchResult = (searchInput) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const filteredResults = data.filter((result) =>
          result.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        searcListItems(filteredResults, searchInput)
      });
  };

  // Handling and using user value
  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <>
      <div className="search-bar">
        <InputGroup className="mb-3 ">
          <Form.Control
            size="lg"
            id="inlineFormInputGroup"
            placeholder="Enter Search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Button variant="primary" id="button-addon2">
            <FaSearch />
          </Button>
        </InputGroup>
      </div>
    </>
  );
};

export default SearchBar;
