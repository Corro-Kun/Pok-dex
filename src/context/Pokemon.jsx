import { createContext, useEffect, useState } from "react";
import { getPokemon } from "../api/ApiPokemon";
export const PokemonContext = createContext();

export function PokemonProvider({children}){
    const [Pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        getListPokemon();
    },[]);

    async function getListPokemon(){
        const data = await getPokemon();
        setPokemons(data);
    }

    return(
        <PokemonContext.Provider value={{Pokemons}} >
            {children}
        </PokemonContext.Provider>
    );
}
