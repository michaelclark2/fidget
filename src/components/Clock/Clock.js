import React, {useState, useEffect} from 'react';
import moment from 'moment';
import './Clock.scss';
import Time from './Time';

export default () => {
  const [time, setTime] = useState(Date.now());
  const [tick, setTick] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setTime(Date.now());
      setTick(!tick);
    }, 1000);
  });

  return (
    <div className="Clock">
      <Time hour={moment(time).format('h')} minute={moment(time).format('mm')} tick={tick} />
      <p className="date">{moment(time).format('MMMM Do')}</p>
    </div>
  )
}
