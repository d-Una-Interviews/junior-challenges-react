import Card from "../Card/Card"
import { Pokemon } from "../../react-app-env"

interface MainProps{
  pokemons: Pokemon[]
}

export default function Main({pokemons}:MainProps ){
  return(
    <div>
      {pokemons?.map((pokemon, index)=>{
        return(
          <Card pokemon={pokemon} index={index} key={index}/>
        )
      })}
    </div>
  )
  
}