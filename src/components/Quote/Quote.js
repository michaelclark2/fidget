import React, { useState, useEffect} from 'react';
import './Quote.scss';

const showAuthor = (e) => {
  if (e.target.id === 'quote'
  && ![...e.srcElement.children].includes(e.fromElement)) {
    const {author} = e.target.children;
    author.classList.remove('hide');
    author.classList.add('show');

  }
}

const hideAuthor = (e) => {
  if (e.target.id === 'quote'
  && ![...e.srcElement.children].includes(e.toElement)) {
    const {author} = e.target.children;
    author.classList.remove('show');
    author.classList.add('hide');
  }
}

export default () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    if (!quote) {
      fetch('http://quotes.rest/qod.json')
        .then(res => res.json())
        .then(res => {
          setQuote(res.contents.quotes[0]);
        });
    }
    window.addEventListener('mouseover', showAuthor)
    window.addEventListener('mouseout', hideAuthor)

    return () => {
      window.removeEventListener('mouseover', showAuthor);
      window.removeEventListener('mouseout', hideAuthor);
    }
  });

  return (
    <div className="Quote" id="quote">
      <p className="quote">"{quote.quote}"</p>
      <p className="author" id="author">{quote.author}</p>
    </div>
  )
};