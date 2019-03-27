import React, { useState, useEffect } from 'react';
import './Weather.scss';
import { getWeather, getIcon } from './weather-helpers';
import Forecast from './Forecast';

const Icon = (props) => {
  switch(props.code) {
    case 'few':
      return <span>ayelmao</span>
    default:
      return null;
  }
}

export default () => {
  const [weather, setWeather] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (!location) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation(pos.coords.latitude.toFixed(4) + ',' + pos.coords.longitude.toFixed(4));
      });
    }
    else if (!weather) {
      getWeather(location)
        .then(weather => {
          setWeather(weather);
        });
    }
  });

  const today = weather && weather.forecast ? weather.forecast[0] : {};

  return (
    <div className="Weather">
      <div className="today">
        <div className="temp">
          <h2>{today.temperature}°</h2>
          <Icon code={getIcon(today.icon)} />
        </div>
        <h2 className="city">{weather.city}, {weather.state}</h2>
      </div>
      {/* <div className="conditions">
        <p>{today.shortForecast}</p>
        <h3>{today.name}</h3>
      </div>
      <div className="forecasts">
        {
          weather ? weather.forecast.map(f => (
            <Forecast forecast={f} />
          )) : []
        }
      </div> */}
    </div>
  )
}