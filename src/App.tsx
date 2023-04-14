import React, { useEffect, useState } from 'react';
import './App.css';
import { Pokemon } from './react-app-env';
import Card from './components/Card';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
      const result = await response.json();
      setPokemons(result.results);
    };
    fetchData();    
  }, [])
  
  return (
    <div className="App">
      {pokemons?.map((pokemon, index)=>{
        return(
          <Card pokemon={pokemon} index={index}/>
        )
      })}
    </div>
  );
}

export default App;
