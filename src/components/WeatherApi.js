import React, { useState, useEffect } from "react";
import { Text, Input, Badge, Code } from "@chakra-ui/react";

export default function WeatherApi() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const api = {
    key: "1f94f09f3e20773383c18cfa27760010",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });

      fetch(
        `${api.base}onecall?${forecast.lat}&${forecast.lon}&exclude=hourly,minutely&units=metric&APPID=${api.key}`
      )
        .then((res) => res.json())
        .then((forecast) => {
          setForecast(forecast);
          console.log(forecast);
        });
    }
  };

  useEffect(() => {
    fetch(`${api.base}weather?q=hongkong&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        setQuery("");
        console.log(result);
        console.log(date);
      });

    fetch(
      `${api.base}onecall?lat=22.2855&lon=114.1577&exclude=hourly,minutely&units=metric&APPID=${api.key}`
    )
      .then((res) => res.json())
      .then((forecast) => {
        setForecast(forecast);
        console.log(forecast);
      });
  }, []);

  return (
    <>
      <div className="box">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
          marginBottom="10px"
        >
          Current Weather
        </Text>
        <Input
          marginBottom="20px"
          size="sm"
          variant="flushed"
          color="gray.100"
          type="text"
          className="search-bar"
          placeholder="e.g. Tokyo + press Enter"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
        {typeof weather.main != "undefined" ? (
          <div className="weatherContainer">
            <Text fontSize="3xl" fontWeight="bold">
              {weather.name}, {weather.sys.country}
            </Text>
            <Text fontSize="6xl" fontWeight="bold" color="blue.500">
              {weather["main"]["temp"]}ºC
            </Text>
            <img
              src={`http://openweathermap.org/img/wn/${weather["weather"][0]["icon"]}@2x.png`}
              alt="new"
            />
            <Text fontSize="3xl"> {weather["weather"][0]["description"]} </Text>
            <Code colorScheme="whiteAlpha" marginTop="10px">
              Humidity: {weather["main"]["humidity"]}% | Lowest:{" "}
              {weather["main"]["temp_min"]}ºC | Highest:{" "}
              {weather["main"]["temp_max"]}
              ºC | Feels like: {weather["main"]["feels_like"]}ºC | Visibility:{" "}
              {weather["visibility"] * 0.001}km | Wind speed:{" "}
              {Math.round(weather["wind"]["speed"] * 1.852)}km/hr
            </Code>

            <Text marginTop="15px" fontSize="xs" opacity="0.4">
              Current data fetched from OpenWeatherMap
            </Text>
            <Text fontSize="8px" opacity="0.4">
              {date}
            </Text>
          </div>
        ) : (
          <Badge variant="outline" colorScheme="red">
            Opps! there is an error 😅 Type a city name and try again!
          </Badge>
        )}
      </div>
    </>
  );
}
