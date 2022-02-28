
import './App.css';
import quotes from './quotes.json';
import Card from './Card'
import { useState } from 'react';



function App() {

  const colors=["#808080","#000080","#0000FF","#008080","#FF0000","#008000"]
  /*const colors=["#845EC2","#C197FF","#00C9A7","#005B44","#FF6F91","#FF8066"]*/
  
  const[quote,setQuote]=useState(quotes[getNumber(quotes.length)]);
  const[color,setColor]=useState(colors[getNumber(colors.length)])

  const handleCita= () => {

    setQuote(quotes[getNumber(quotes.length)]);
    setColor(colors[getNumber(colors.length)]);

  }

  return (
    <div className="App" style={{background:color}}>

      <Card  quote={quote.quote} author={quote.author} handleCita={handleCita} color={color}/>

    </div>
  );
}

const getNumber=(max)=>Math.floor(Math.random()*max);

export default App;
