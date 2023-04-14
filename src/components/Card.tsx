import { Pokemon } from "../react-app-env"

interface CardInterface{
  pokemon: Pokemon,
  index:number
}

export default function Card({pokemon, index}: CardInterface){
  return(
    <div>
      <a href={pokemon.url}>
        <h1>{index+1}. {pokemon.name}</h1>
      </a>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`} alt={pokemon.name}/>
    </div>
  )
}