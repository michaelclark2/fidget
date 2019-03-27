export const getWeather = async (coords) => {
  try {
    let details = await fetch(`https://api.weather.gov/points/${coords}`).then(res => res.json());
    let forecast = await fetch(details.properties.forecast).then(res => res.json());

    const weatherObj = {
      city: details.properties.relativeLocation.properties.city,
      state: details.properties.relativeLocation.properties.state,
      forecast: forecast.properties.periods
    };

    return weatherObj;
  }
  catch (err) {
    console.error('Error with Weather API', err);
  }
};

export const getIcon = (iconUrl = '') => {
  // iconUrl = "https://api.weather.gov/icons/land/night/skc?size=medium" <= I need skc
  return iconUrl.split('?').shift().split('/').pop();
}