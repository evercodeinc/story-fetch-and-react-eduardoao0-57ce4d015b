import { useState } from "react";
import Container from "./components/Container";
import Spinner from "./components/Spinner";

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (event) => {
    setIsLoading(true) 

    fetch("https://meowfacts.herokuapp.com")
    .then(response => response.json())
    .then(data => {
      setQuote(data)
      setIsLoading(false)
    })
  }

  return (
    <Container>
      <button data-testid="button" onClick={e => handleClick(e)}>
        <span>get a fact</span>
      </button>
      {
        
        isLoading || quote === '' ? 
        ( <Spinner /> ) : ( <span data-testid="quote">{quote.data}</span> )
      }
    </Container>
  );
}

export default App;