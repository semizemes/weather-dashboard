import React from 'react';
import mockWeatherData, {fetchWeather} from "../utils/api";
import Select from "react-select";

const CitySelector = (props) => {
    const [city, setCity] = React.useState(null);
    const citiesArr = mockWeatherData ? Object.keys(mockWeatherData) : [];
    const cities = citiesArr.map(city => ({value: city, label: city}))

    function handleSelectCity(option) {
        const selectedCity = option.value;
        props.onCityChange(selectedCity);
        setCity(selectedCity);
    }
    return(
        <div>
            <p>Select city: </p>
            <Select
                onChange={handleSelectCity}
                options={cities}
                placeholder="Input city..."
                notOptionsMessage={() => 'No city found'}
            />
        </div>
)
}

export default CitySelector;
