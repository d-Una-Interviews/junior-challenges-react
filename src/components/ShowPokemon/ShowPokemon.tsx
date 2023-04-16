import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Pokemon, Stat } from "../../react-app-env";
import './ShowPokemon.css';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MyComponent() {
  return <FontAwesomeIcon icon={faUser} />;
}


type TotalTypes = {
  [key in PokemonType]: string;
}

type PokemonType =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "shadow";

const totalTypes: TotalTypes = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
    shadow: "#615AA9"
  };
const INIT_POKEMON = {
  name: "",
  image: "",
  types: [],
  weight: 0,
  height: 0,
  stats: [{
    name:"",
    base: 0
  }]
}

interface StatData {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface TypeData {
  type: {
    name: PokemonType;
  };
}

export default function ShowPokemon(){
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>(INIT_POKEMON)
  
  useEffect(() => {
    const stats:Stat[] = []
    const types:string[] = []
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const result = await response.json();

      result.stats.forEach((stat: StatData) =>{
        stats.push({
          name:stat.stat.name,
          base: stat.base_stat
        })
      })

      result.types.forEach((type: TypeData) =>{
        types.push(type.type.name)
      })

      setPokemon({
        name: result.name,
        image: result.sprites.front_default,
        types: types,
        weight: result.weight,
        height: result.height,
        stats: stats
      });
    };
    fetchData();  
    
  }, [id])

  return(
    <div className="wrapper">
      {pokemon 
      ?
      <>
        <div style={{position:"relative"}}>
          <Link to={`/`}  className="link">
            <FontAwesomeIcon  className="arrow" icon={faArrowLeft} size="2x"/>
          </Link>
        </div>
          <h1 className="title">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
        
        <div className="type-container">
          {
            pokemon.types.map((type: string) =>{
              return(
                <p className="type" style={{background:totalTypes[type as PokemonType]}}>{type}</p>
                )
              })
            }
        </div>
        <div className="img-container">
          {
            id ? 
            <>
              {id === "1" ? 
                null :
                <Link to={`/pokemon/${parseInt(id)-1}`}  className="link">
                  <FontAwesomeIcon icon={faChevronLeft} size="4x"/>
                </Link>  
              }
              <img className="show-img" src={pokemon.image} alt="Sin imagen"/>
              <Link to={`/pokemon/${parseInt(id)+1}`} className="link">
                <FontAwesomeIcon icon={faChevronRight} size="4x"/>
              </Link>
            </>
            : null
          }
        </div>
        <div className="char-container">
          <p>weight: {pokemon.weight/10}kg</p>
          <p>height: {pokemon.height/10}m</p>
        </div>
        <div className="stats-container">
          {
            pokemon.stats.map(stat =>{
              return(
                <>
                  <h1>{stat.name.charAt(0).toUpperCase() + stat.name.slice(1)}: {stat.base}</h1>
                  <div className="base-rectangle">
                    <div className="base-stat" style={{width:`${stat.base/200*80}%`}}></div>
                    {/* TODO: Botones para cambiar de pokemon izq y derecha */}
                  </div>
                </>
              )
            })
          }
        </div>
      </> 
      :
        null
      }
    </div>
  )
}