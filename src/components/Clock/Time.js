import React from 'react';

export default (props) => {
  const {tick, time} = props;
  const hour = new Date(time).getHours();
  const minute = new Date(time).getMinutes();
  return (
    <div className="time">
      <p>{ hour > 12 ? hour - 12 : hour }</p>
      <div className="ticker">{ tick ? ':' : ' ' }</div>
      <p>{minute.toString().length < 2 ? '0' + minute : minute}</p>
    </div>
  );
}