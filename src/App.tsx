import React, { useEffect, useState } from 'react';
import './App.css';
import { Pokemon } from './react-app-env';
import Card from './components/Card/Card';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Main/Main';
import ShowPokemon from './components/ShowPokemon./ShowPokemon';

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
      <Routes>
        <Route path="/" element={<Main pokemons={pokemons}/>} />
        {/* <Route path="home" element={<ShowPokemon/>} /> */}
        

      </Routes>
      
    </div>
  );
}

export default App;
