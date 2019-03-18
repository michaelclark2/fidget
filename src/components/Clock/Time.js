import React from 'react';

export default (props) => {
  const {tick, time} = props;
  const hour = new Date(time).getHours();
  const minute = new Date(time).getMinutes();
  return (
    <div className="time">
      <p>{hour}</p>
      <div className="ticker">{ tick ? ':' : ' ' }</div>
      <p>{minute}</p>
    </div>
  );
}