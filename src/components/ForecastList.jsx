import React, {useEffect, useState} from "react";
import axios from "axios";
import "../styles/styles.css";
import mockAPI5days, {fetchWeather5days} from "../utils/mockAPI5days";

const API_KEY = process.env.REACT_APP_OWM_API_KEY;

const ForecastList = ({city, fetch5dayForecast}) => {
    const [forecast, setForecast] = useState([]);
    const [error, setError] = useState(null);

    const mockdata5daysPromise = fetchWeather5days(city);

    useEffect(() => {
        const fetchForecast = async () => {
            if (!city) return;

            try {
                // const response = await axios.get(
                //     `https://api.openweathermap.org/data/2.5/forecast`, {
                //         params: {
                //             q: city,
                //             units: 'metric',
                //             appid: API_KEY
                //         }
                //     });
                //
                // const data = response.data.list;
                // console.log(data);
                // real API

                const res = await fetchWeather5days(city);
                const data = res.list;
                console.log(data);

                const dailyMap = {};

                data.forEach(item => {
                    const date = item.dt_txt.split(' ')[0];
                    if (!dailyMap[date]) dailyMap[date] = [];
                    dailyMap[date].push(item);
                });

                const fiveDayForecast = Object.entries(dailyMap)
                    .slice(0, 5)
                    .map(([date, entries]) => {
                        const temps = entries.map(e => e.main.temp);
                        const min = Math.min(...temps);
                        const max = Math.max(...temps);
                        const avg = (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1);
                        const weather = entries[0].weather[0];

                        return {
                            date,
                            min,
                            max,
                            avg,
                            icon: weather.icon,
                            description: weather.description
                        };
                    });

                setForecast(fiveDayForecast);
                setError(null);

            } catch (err) {
                setError("Failed to fetch forecast");
                setForecast([]);
            }
        };
        fetchForecast();
    }, [city]);

    if (error) return <p>{error}</p>;
    if (!forecast.length) return <p>Loading forecast...</p>;

    //fetching data from mock API

    fetch5dayForecast(forecast);

    return (
        <div className="forecast-container">
            {forecast.map(day => (
                <div key={day.date} className="forecast-card">
                    <h4>{day.date}</h4>
                    <img
                        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                        alt={day.description}
                    />
                    <p>{day.description}</p>
                    <p><strong>Min:</strong> {day.min}°C</p>
                    <p><strong>Max:</strong> {day.max}°C</p>
                    <p><strong>Avg:</strong> {day.avg}°C</p>
                </div>
            ))}
        </div>
    );
};

export default ForecastList;
