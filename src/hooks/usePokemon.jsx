import { useContext } from "react";
import { PokemonContext } from "../context/Pokemon";

export function usePokemon(){
    return useContext(PokemonContext);
}