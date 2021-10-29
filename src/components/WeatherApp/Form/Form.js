import React, { useState } from "react";
import { Input, InputGroup, IconButton, FormControl } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
// import PropTypes from 'prop-types;'

export default function Form({ submitSearch }) {
  const [location, setLocation] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ location });
    if (!location || location === "") return;
    submitSearch(location);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <InputGroup>
          <Input
            type="text"
            placeholder="Your city name"
            aria-label="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <IconButton
            marginLeft="5px"
            colorScheme="facebook"
            aria-label="Search database"
            icon={<SearchIcon />}
            type="submit"
            isLoading=""
            onClick={onSubmit}
          />
        </InputGroup>
      </FormControl>
    </form>
  );

  // Form.propTypes = {
  //     submitSearch: PropTypes.function.isRequired}
  
}
