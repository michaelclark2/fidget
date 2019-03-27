import React from 'react';

// {
//   "number": 1,
//   "name": "Tonight",
//   "startTime": "2019-03-18T22:00:00-05:00",
//   "endTime": "2019-03-19T06:00:00-05:00",
//   "isDaytime": false,
//   "temperature": 30,
//   "temperatureUnit": "F",
//   "temperatureTrend": "rising",
//   "windSpeed": "0 to 5 mph",
//   "windDirection": "NNE",
//   "icon": "https://api.weather.gov/icons/land/night/skc?size=medium",
//   "shortForecast": "Clear",
//   "detailedForecast": "Clear. Low around 30, with temperatures rising to around 34 overnight. North northeast wind 0 to 5 mph."
// }


export default (props) => {
  const {forecast} = props;
  return (
    <div className="Forecast">
      <h3>{forecast.name}</h3>
      <h5>{forecast.shortForecast}</h5>
    </div>
  )
}