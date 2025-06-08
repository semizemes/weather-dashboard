import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import WeatherWidget from "./components/WeatherWidget";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WeatherWidget />
);

