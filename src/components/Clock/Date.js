import React from 'react';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getDate = (date) => {
  const dayOfMonth = new Date(date).getDate().toString();

  const lastChar = dayOfMonth[dayOfMonth.length - 1];

  switch (lastChar) {
    case '1':
      return dayOfMonth + 'st';
    case '2':
      return dayOfMonth + 'nd';
    case '3':
      return dayOfMonth + 'rd';
    default:
      return dayOfMonth + 'th';
  }
}

export default (props) => {
  const {date} = props;
  const month = months[new Date(date).getMonth()];
  const day = days[new Date(date).getDay()];
  const dayOfMonth = getDate(date);

  return (
    <div className="date">
      <p>{day}, {month} {dayOfMonth}</p>
    </div>
  )
}