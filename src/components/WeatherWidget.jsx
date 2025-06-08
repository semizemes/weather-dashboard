import React, {useState} from 'react';
import CitySelector from './CitySelector';
import WeatherDisplay from "./WeatherDisplay";

const WeatherWidget = () => {
    const [selectedCity, setSelectedCity] = useState(null);

    const handleCityChange = (city) => {
        setSelectedCity(city);
    }

    return (
        <div className='weather-widget'>
            <CitySelector onCityChange={handleCityChange} />
            <WeatherDisplay city={selectedCity} />
        </div>
    )
}

export default WeatherWidget;