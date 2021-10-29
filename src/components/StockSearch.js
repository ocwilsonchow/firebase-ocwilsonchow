import React, { useState } from "react";
import { Text, Button, Input, InputGroup, Badge, Code } from "@chakra-ui/react";

export default function StockSearch() {
  const apiKey = "OG5R1X4VMKNI3O70";
  //  const BASE_URL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&interval=5min&apikey=OG5R1X4VMKNI3O70"

  const [stock, setStock] = useState({});
  const [stockFundamental, setStockFundamental] = useState({});
  const [query, setQuery] = useState();

  const handleSubmit = () => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${query}&interval=5min&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((result) => {

        console.log(result);
        setStock(result);
        setQuery(result);
        setQuery("");
        
      });

    fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${query}&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setStockFundamental(result);
        
      });

     
  };

  return (
    <div className="box">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
        marginBottom="10px"
      >
        Stocks <Badge bg="yellow">new</Badge>
      </Text>

      <InputGroup>
        <Input
          marginBottom="10px"
          variant="flushed"
          color="gray.100"
          type="text"
          className="search-bar"
          placeholder="Type in a stock symbol e.g. TSLA"
          onChange={(e) => setQuery(e.target.value.toUpperCase())}
          value={query}
          autocomplete="off"
          spellcheck="false"
          autocorrect="off"
          size="sm"
          colorScheme="facebook"
        />
      </InputGroup>

      <Button
        size="xs"
        bg="black"
        onClick={handleSubmit}
        marginBottom="20px"
        colorScheme="whatsapp"
        padding="15px"
        borderRadius="20px"
      
      >
        Search stock by symbol 👆🏻
      </Button>
      {typeof stock["Meta Data"] != "undefined" ? (
        <div>
          <Code colorScheme="whiteAlpha" marginRight="5px">
            {stockFundamental["Name"]}
          </Code>
          <Code colorScheme="whiteAlpha" marginRight="5px">
            {stockFundamental["Exchange"]}
          </Code>
          <Text fontSize="5xl" fontWeight="bold">
            {stock["Meta Data"]["2. Symbol"].toUpperCase()}
          </Text>
          <Text fontSize="4xl" color="blue.500" fontWeight="bold">
            {
              stock["Time Series (Daily)"][
                stock["Meta Data"]["3. Last Refreshed"]
              ]["4. close"]
            }
            <Badge marginLeft="4px">{stockFundamental["Currency"]}</Badge>
          </Text>
          <Text fontWeight="bold">
            High:{" "}
            {
              stock["Time Series (Daily)"][
                stock["Meta Data"]["3. Last Refreshed"]
              ]["2. high"]
            }{" "}
            | Low:{" "}
            {
              stock["Time Series (Daily)"][
                stock["Meta Data"]["3. Last Refreshed"]
              ]["3. low"]
            }
          </Text>
          <Text fontSize="8px" opacity="0.4">
            Data last captured on {stock["Meta Data"]["3. Last Refreshed"]}
          </Text>
          <Text opacity="0.8" fontSize="sm" fontWeight="bold" marginTop="10px">
            More about {stockFundamental["Name"]}
          </Text>
          <Text opacity="0.8" marginBottom="10px" fontSize="10px">
            {stockFundamental["Description"]}
          </Text>
          <Text fontSize="8px" opacity="0.4">
            Data fetched from alphavantage
          </Text>
        </div>
      ) : (
        <div>
          <Code colorScheme="whiteAlpha" marginRight="5px" marginBottom="15px">
            Type in a stock symbol and start searching 😁
          </Code>
          <Code colorScheme="whiteAlpha" marginRight="5px" marginBottom="15px">
            For example: Apple[AAPL], Microsoft[MSFT], Google[GOOGL],
            Amazon[AMZN], Facebook[FB], Tesla[TSLA], NVIDIA[NVDA],
            Alibaba[BABA], Walmart[WMT], Home Depot[HD], Netflix[NFLX],
            Adobe[ADBE], Futu[FUTU], Starbucks[SBUX]
          </Code>
          <Code
            bg="black"
            colorScheme="whiteAlpha"
            marginRight="5px"
            marginBottom="15px"
          >
            Due to a limited allowance of API call per minute, you can only
            request data for up to 5 companies/minute. Slow down!
          </Code>
        </div>
      )}
    </div>
  );
}
