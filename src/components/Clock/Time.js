import React from 'react';

const formatHour = (time) => {
  const hour = new Date(time).getHours();
  return hour > 12 ? hour - 12 : hour || 12;
};

const formatMinute = (time) => {
  const minute = new Date(time).getMinutes();
  return minute < 10 ? '0' + minute: minute;
}

export default (props) => {
  const {tick, time} = props;
  return (
    <div className="time">
      <p>{formatHour(time)}</p>
      <div className="ticker">{ tick ? ':' : ' ' }</div>
      <p>{formatMinute(time)}</p>
    </div>
  );
}