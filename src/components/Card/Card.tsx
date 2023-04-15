import { Link } from "react-router-dom";
import { MainPokemon } from "../../react-app-env"
import './Card.css';

interface CardInterface{
  pokemon: MainPokemon,
  index:number
}

export default function Card({pokemon, index}: CardInterface){
  return(
    <Link to={`/pokemon/${index+1}`}>
      <div className="card">
        <h1>{pokemon.name}</h1>
        <p>#{index+1}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt={pokemon.name}/>
      </div>
    </Link>
  )
}