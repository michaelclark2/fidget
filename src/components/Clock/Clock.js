import React, {useState, useEffect} from 'react';
import './Clock.scss';
import Time from './Time';
import DateClock from './Date';

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
      <Time time={time} tick={tick} />
      <DateClock date={time} />
    </div>
  )
}
