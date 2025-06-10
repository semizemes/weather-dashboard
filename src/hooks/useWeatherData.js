import {useState, useEffect} from "react";
import {fetchWeather} from "../utils/api";
import axios from "axios";

const API_KEY = process.env.REACT_APP_OWM_API_KEY;

const useWeatherData = (city, settings ) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!city) return;

            setLoading(true);
            setError(null);

            const {units} = settings

            try {
                const data = await axios.get(
                    `http://api.openweathermap.org/data/2.5/weather`, {
                        params: {
                            q: city,
                            units: units.value,
                            appid: API_KEY
                        }
                    });
                setWeatherData(data);
            } catch (err) {
                setError("Failed to fetch weather data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [city, settings]);

    return {weatherData, loading, error};
};

export default useWeatherData;