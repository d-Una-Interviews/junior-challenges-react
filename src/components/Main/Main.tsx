import Card from "../Card/Card"
import { MainPokemon } from "../../react-app-env"
import './Main.css';


interface MainProps{
  pokemons: MainPokemon[]
}

export default function Main({pokemons}:MainProps ){
  return(
    <div className="main-container">
      {pokemons?.map((pokemon, index)=>{
        return(
          <Card pokemon={pokemon} index={index} key={index}/>
        )
      })}
    </div>
  )
  
}