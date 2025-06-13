import React, {useState, useEffect} from 'react';
import CitySelector from './CitySelector';
import WeatherDisplay from "./WeatherDisplay";
import ForecastList from "./ForecastList";
import DataVisualization from "./DataVisualization";
import SettingsPanel from "./SettingsPanel";


const WeatherWidget = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [fiveDayForecast, setFiveDayForecast] = useState([]);
    const [settings, setSettings] = useState({
        units: {value: 'metric', label: 'Metric'},
        refreshRate: {value: 7200, label: '2 hours'},
        displayOptions: {value: 'detailed', label: 'Detailed View'},
    });

    let currentTime = new Date().toLocaleTimeString();

    const [lastUpdated, setLastUpdated] = useState(currentTime); // New state for a timestamp
    const [refreshTimer, setRefreshTimer] = useState(null);

    const refreshForecastAndWeather = () => {
        console.log("Refreshing weather and forecast data...");
        setLastUpdated(new Date().toLocaleTimeString()); // Update the timestamp
        // Continue with the fetch logic for weather and forecast
    };

    const handleSettingsChange = (newSettings) => {
        setSettings(newSettings);
    };

    useEffect(() => {
        if (refreshTimer) {
            clearInterval(refreshTimer);
        }

        const interval = setInterval(() => {
            if (selectedCity) {
                refreshForecastAndWeather();
            }
        }, settings.refreshRate.value * 1000);

        setRefreshTimer(interval);

        return () => {
            clearInterval(interval);
        };
    }, [settings, selectedCity]);

    return (
        <div className='weather-widget'>
            <CitySelector onCityChange={setSelectedCity}/>
            {lastUpdated && (
                <p className="last-updated">Weather data on: {lastUpdated}</p>
            )}
            <WeatherDisplay city={selectedCity} settings={settings}/>
            {settings.displayOptions.value === 'detailed' && (
    <div className="visualization-and-forecast">
    <div className="visualization">
        <DataVisualization forecast={fiveDayForecast} />
    </div>
    <div className="forecast">
        <ForecastList settings={settings} city={selectedCity} fetch5dayForecast={setFiveDayForecast} />
    </div>
</div>
)}
    <SettingsPanel onSettingsChange={handleSettingsChange}/>
</div>
)
    ;
};

export default WeatherWidget;