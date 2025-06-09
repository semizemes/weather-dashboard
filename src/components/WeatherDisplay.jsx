import React, {useEffect, useState} from 'react';
import useWeatherData from "../hooks/useWeatherData";

const WeatherDisplay = ({city}) => {
    const [weatherData, setWeatherData] = useState(null);

    const weatherDataPromise = useWeatherData(city);
    useEffect(() => {
        if (city) {
            weatherDataPromise
                .then(data => {
                    setWeatherData(data);
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }, [city]);

    // console.log(weatherData);

    return (
        <div>
            Weather Data for {city}
            {/* Add your weather display logic here */}
        </div>
    );
};

export default WeatherDisplay;