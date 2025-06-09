import axios from "axios";
import {fetchWeather} from "../utils/api";

const API_KEY = process.env.REACT_APP_OWM_API_KEY;


const useWeatherData = async (city) => {
    // if (city) {
    //     const weatherData = await axios.get(
    //         `http://api.openweathermap.org/data/2.5/weather`, {
    //             params: {
    //                 q: city,
    //                 appid: API_KEY
    //             }
    //         });
    //     console.log(weatherData.data);
    // }
    // real API response

    if (city) {
        const weatherData = await fetchWeather(city);
        return weatherData;
    }
};

export default useWeatherData;