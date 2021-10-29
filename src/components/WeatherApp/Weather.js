import React from "react";
import Form from "./Form/Form";
import { Text, Spinner, Container, Wrap } from "@chakra-ui/react";
import Forecast from "./hooks/useForecast";
import useForecast from "./hooks/useForecast";
import Error from "./Error/Error";
import Loader from "./Loader/Loader";

function Weather() {
  const { isError, isLoading, forecast, submitRequest } = useForecast();

  const onSubmit = (value) => {
    console.log({ value });
    submitRequest(value);
  };

  return (
    <div className="box">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
        marginBottom="10px"
      >
        Check Weather
      </Text>
      <Text paddingBottom="10px">(Under construction...)</Text>

      {!forecast && (
        <div>
          {!isLoading && <Form submitSearch={onSubmit} />}
          {isLoading && <Loader />}
          {isError && <Error message={isError} />}
        </div>
      )}

      {forecast && <Forecast />}
    </div>
  );
}

export default Weather;
