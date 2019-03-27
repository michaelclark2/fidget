import React from 'react';
import Icon from '@mdi/react';
import { mdiWeatherSunny, mdiWeatherPartlycloudy, mdiWeatherWindy, mdiWeatherWindyVariant, mdiWeatherCloudy, mdiWeatherSnowy, mdiWeatherSnowyRainy, mdiWeatherPouring, mdiWeatherRainy, mdiWeatherLightningRainy, mdiWeatherHurricane, mdiWeatherFog } from '@mdi/js';

export default (props) => {
  switch(props.code) {
    case 'skc':
    case 'few':
    case 'hot':
      return <Icon path={mdiWeatherSunny} {...props} />
    case 'sct':
    case 'bkn':
      return <Icon path={mdiWeatherPartlycloudy} {...props} />
    case 'ovc':
      return <Icon path={mdiWeatherCloudy} {...props} />
    case 'wind_skc':
    case 'wind_few':
      return <Icon path={mdiWeatherWindy} {...props} />
    case 'wind_sct':
    case 'wind_bkn':
    case 'wind_ovc':
      return <Icon path={mdiWeatherWindyVariant} {...props} />
    case 'snow':
    case 'cold':
    case 'blizzard':
      return <Icon path={mdiWeatherSnowy} {...props} />
    case 'rain_snow':
    case 'rain_sleet':
    case 'snow_sleet':
    case 'fzra':
    case 'rain_fzra':
    case 'snow_fzra':
    case 'sleet':
      return <Icon path={mdiWeatherSnowyRainy} {...props} />
    case 'rain':
    case 'rain_showers':
    case 'rain_showers_hi':
      return <Icon path={mdiWeatherPouring} {...props} />
    case 'tsra':
    case 'tsra_sct':
    case 'tsra_hi':
      return <Icon path={mdiWeatherLightningRainy} {...props} />
    case 'tornado':
    case 'hurricane':
    case 'tropical_storm':
      return <Icon path={mdiWeatherHurricane} {...props} />
    case 'dust':
    case 'smoke':
    case 'haze':
    case 'fog':
      return <Icon path={mdiWeatherFog} {...props} />
    default:
      return null;
  }
}