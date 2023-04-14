import { Pokemon } from "../../react-app-env"
import './Card.css';

interface CardInterface{
  pokemon: Pokemon,
  index:number
}

export default function Card({pokemon, index}: CardInterface){
  return(
    <a href={pokemon.url}>
      <div className="card">
        <h1>{pokemon.name}</h1>
        <p>#{index+1}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt={pokemon.name}/>
      </div>
    </a>
  )
}