import Card from "../Card/Card"
import { MainPokemon } from "../../react-app-env"

interface MainProps{
  pokemons: MainPokemon[]
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