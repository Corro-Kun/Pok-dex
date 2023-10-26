import { useContext } from "react";
import { PokemonContext } from "../context/Pokemon";

export function usePokemon(){
    const context = useContext(PokemonContext);

    if(!context){
        throw new Error("usePokemon must be used within a PokemonProvider");
    }

    return context;
}