import React from "react";
import useWeatherData from "../hooks/useWeatherData";
import "../styles/styles.css";

const WeatherDisplay = ({city, settings}) => {
    const {weatherData, loading, error} = useWeatherData(city, settings);

    if (!city) return <p>Please select a city to view weather details.</p>;
    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>{error}</p>;

    if (!weatherData) return null;

    // console.log(weatherData);

    return (
        <div className="weather-display">
            <h2>Weather in {weatherData.city || city}</h2>
            <div className="weather-details">
                <p><strong>Temperature:</strong> {weatherData.data.main.temp}°C</p>
                <p><strong>Humidity:</strong> {weatherData.data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> {weatherData.data.wind.speed} m/s</p>
                <p><strong>Weather:</strong> {weatherData.data.weather[0].description}</p>
                <img
                    src={`https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`}
                    alt={weatherData.data.weather[0].description}
                />
            </div>
        </div>
    );
};

export default WeatherDisplay;