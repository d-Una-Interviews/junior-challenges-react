import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Pokemon } from "../../react-app-env";


const INIT_POKEMON = {
  name: "",
  image: "",
  types: [],
  weight: 0,
  height: 0,
}

export default function ShowPokemon(){
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>(INIT_POKEMON)
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const result = await response.json();
      setPokemon({
        name: result.name,
        image: "as",
        types: ["asda"],
        weight: 12,
        height: result.height
      });
    };
    fetchData();  
  
  }, [])
  
  return(
    <div>
      {pokemon 
      ? 
      <p>{pokemon.name}</p>
      :
        null
      }
      <h1>mi id: {id}</h1>
    </div>
  )
}