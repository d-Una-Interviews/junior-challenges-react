/// <reference types="react-scripts" />
export interface MainPokemon{
  name: string,
  url: string
}

export interface Pokemon{
  name: string,
  image: string,
  types: string[],
  weight: number,
  height: number,
  stats: Stat[]
}

export interface Stat{
  name: string,
  base: number
}

