import React from 'react';

export default (props) => {
  const {tick, hour, minute} = props;
  return (
    <div className="time">
      <p>{hour}</p>
      <div className="ticker">{ tick ? ':' : ' ' }</div>
      <p>{minute}</p>
    </div>
  );
}