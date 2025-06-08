const mockWeatherData = {
    'London': {
        "coord": {
            "lon": -0.1257,
            "lat": 51.5085
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 288.34,
            "feels_like": 287.43,
            "temp_min": 288.34,
            "temp_max": 288.34,
            "pressure": 1017,
            "humidity": 58,
            "sea_level": 1017,
            "grnd_level": 1013
        },
        "visibility": 10000,
        "wind": {
            "speed": 5.41,
            "deg": 288,
            "gust": 8.24
        },
        "clouds": {
            "all": 1
        },
        "dt": 1749377437,
        "sys": {
            "country": "GB",
            "sunrise": 1749354283,
            "sunset": 1749413681
        },
        "timezone": 3600,
        "id": 2643743,
        "name": "London",
        "cod": 200
    },
    'New York': {
        "coord": {
            "lon": -74.006,
            "lat": 40.7143
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 290.57,
            "feels_like": 290.69,
            "temp_min": 290.57,
            "temp_max": 290.57,
            "pressure": 1009,
            "humidity": 89,
            "sea_level": 1009,
            "grnd_level": 1009
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.01,
            "deg": 39,
            "gust": 5.47
        },
        "clouds": {
            "all": 100
        },
        "dt": 1749380877,
        "sys": {
            "country": "US",
            "sunrise": 1749374697,
            "sunset": 1749428734
        },
        "timezone": -14400,
        "id": 5128581,
        "name": "New York",
        "cod": 200
    },
    'Tokyo': {
        "coord": {
            "lon": 139.6917,
            "lat": 35.6895
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 296.55,
            "feels_like": 296.43,
            "temp_min": 296.55,
            "temp_max": 296.55,
            "pressure": 1011,
            "humidity": 57,
            "sea_level": 1011,
            "grnd_level": 1009
        },
        "visibility": 10000,
        "wind": {
            "speed": 6.32,
            "deg": 185,
            "gust": 8.56
        },
        "clouds": {
            "all": 100
        },
        "dt": 1749381004,
        "sys": {
            "country": "JP",
            "sunrise": 1749324318,
            "sunset": 1749376525
        },
        "timezone": 32400,
        "id": 1850144,
        "name": "Tokyo",
        "cod": 200
    },
    'Sydney': {
        "coord": {
            "lon": 151.2073,
            "lat": -33.8679
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 283.04,
            "feels_like": 280.77,
            "temp_min": 283.04,
            "temp_max": 283.04,
            "pressure": 1006,
            "humidity": 64,
            "sea_level": 1006,
            "grnd_level": 1001
        },
        "visibility": 10000,
        "wind": {
            "speed": 4.57,
            "deg": 306,
            "gust": 8.61
        },
        "clouds": {
            "all": 3
        },
        "dt": 1749380940,
        "sys": {
            "country": "AU",
            "sunrise": 1749329725,
            "sunset": 1749365591
        },
        "timezone": 36000,
        "id": 2147714,
        "name": "Sydney",
        "cod": 200
    },
    'Cairo': {
        "coord": {
            "lon": 31.2497,
            "lat": 30.0626
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 307.15,
            "feels_like": 305.42,
            "temp_min": 307.15,
            "temp_max": 307.15,
            "pressure": 1010,
            "humidity": 23,
            "sea_level": 1010,
            "grnd_level": 1004
        },
        "visibility": 10000,
        "wind": {
            "speed": 4.3,
            "deg": 331,
            "gust": 5.51
        },
        "clouds": {
            "all": 0
        },
        "dt": 1749381257,
        "sys": {
            "country": "EG",
            "sunrise": 1749351204,
            "sunset": 1749401698
        },
        "timezone": 10800,
        "id": 360630,
        "name": "Cairo",
        "cod": 200
    }
}

export const fetchWeather = async (city) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockWeatherData[city]
};

export default mockWeatherData;