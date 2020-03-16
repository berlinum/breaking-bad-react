import React from 'react';
import Author from './Author';
import styled from '@emotion/styled';
import Button from './Button';
import QuoteText from './QuoteText';

const ButtonContainer = styled.div`
  display: flex;
  width: 65vw;
  height: 20vw;
  margin-bottom: 15vh;
  justify-content: center;
`;

function Quote() {
  const [quotes, setQuotes] = React.useState([]);
  const [currentQuote, setCurrentQuote] = React.useState('');
  // const [author, setAuthor] = React.useState('Walter White');

  React.useEffect(() => {
    async function getQuotes() {
      const response = await fetch(
        'https://breaking-bad-quotes.herokuapp.com/v1/quotes/300'
      );
      const quotes = await response.json();
      setQuotes(quotes);
    }
    getQuotes();
  }, []);

  function handleClick(name) {
    const filteredQuotes = quotes
      .filter(author => author.author === name)
      .map(filteredQuotes => [filteredQuotes.author, filteredQuotes.quote]);
    const randomQuote =
      filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
    setCurrentQuote(randomQuote);
  }

  return (
    <>
      <QuoteText>{currentQuote[1]}</QuoteText>
      <Author>{currentQuote[0]}</Author>
      <ButtonContainer>
        <Button
          onClick={() => {
            handleClick('Walter White');
          }}
        >
          White
        </Button>
        <Button
          onClick={() => {
            handleClick('Jesse Pinkman');
          }}
        >
          Jesse
        </Button>
      </ButtonContainer>
    </>
  );
}

export default Quote;
