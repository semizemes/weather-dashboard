import React, {useState} from 'react';
import CitySelector from './CitySelector';
import WeatherDisplay from "./WeatherDisplay";
import ForecastList from "./ForecastList";
import DataVisualization from "./DataVisualization";
import SettingsPanel from "./SettingsPanel";

const WeatherWidget = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [fiveDayForecast, setFiveDayForecast] = useState([]);
    const [settings, setSettings] = useState({
        unit: "metric"
    });

    const handleCityChange = (city) => {
        setSelectedCity(city);
    }

    const handleFiveDayForecast = (forecast) => {
        setFiveDayForecast(forecast);
    }

    const handleSettingsChange = (newSettings) => {
        setSettings(newSettings);
        // You can add additional logic here to handle settings changes
        // For example, updating the weather display format or refresh rate
    }

    // console.log(fiveDayForecast);

    return (
        <div className='weather-widget'>
            <CitySelector onCityChange={handleCityChange} />
            <WeatherDisplay city={selectedCity} settings={settings} />
            <DataVisualization forecast={fiveDayForecast} />
            <ForecastList settings={settings} city={selectedCity} fetch5dayForecast={handleFiveDayForecast} />
            <SettingsPanel onSettingsChange={handleSettingsChange} />
        </div>
    )
}

export default WeatherWidget;