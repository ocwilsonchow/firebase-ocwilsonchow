import React from 'react';
import PropTypes from 'prop-types';
import { Text, CircularProgress, Center, Heading } from "@chakra-ui/react";


const Error = ({ message }) => (
    
    <Center margin="20px">{ message } </Center>
);

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'An error occurred',
};

export default Error;
