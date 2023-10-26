import { createContext, useEffect, useState } from "react";
import { getPokemonDetail } from "../api/ApiPokemon";
import { useParams } from "react-router-dom";

export const PokemonDetailsContext = createContext();

export function PokemonDetailsProvider({ children }) {
    const [Pokemon, setPokemon] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        getPokemonDetails();
    },[]);

    async function getPokemonDetails() {
        const data = await getPokemonDetail(id);
        setPokemon(data);
    }

    return(
        <PokemonDetailsContext.Provider value={{Pokemon}}>
            {children}
        </PokemonDetailsContext.Provider>
    );
}