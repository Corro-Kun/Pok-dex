import { createContext, useEffect, useState } from "react";
import { getPokemon, getPokemonPage, getPokemonOffLimit } from "../api/ApiPokemon";

export const PokemonContext = createContext();

export function PokemonProvider({children}){
    const [Pokemons, setPokemons] = useState([{
        name: "",
        id: "",
        image: "",
        types: ""
    }]);
    const [IsLoading, setIsLoading] = useState(true);
    const [Page, setPage] = useState(0);

    useEffect(()=>{
        getListPokemon();
    },[]);

    async function getListPokemon(){
        try {
            const data = await getPokemon();
            setPokemons(data);
            setIsLoading(false);       
        } catch (error) {
            console.log(error);    
        }
    }

    async function changerPage(i){
        try{
            if(i < 0){
                setPage(0);
            }
            const data = await getPokemonPage(i);
            setPage(i);
            setPokemons(data);
            setIsLoading(false);
        }catch(error){
            console.log(error);
        }
    }

    function nextPage(){
        setIsLoading(true);
        changerPage(Page + 1);
    }

    function prevPage(){
        setIsLoading(true);
        changerPage(Page - 1);
    }

    async function searchPokemon({target: {value}}){
        if(value.length > 0){
            setIsLoading(true);
            try {
                let data = []
                data = await getPokemonOffLimit(value);
                const newData = data.filter((pokemon)=> pokemon.name?.toLowerCase().includes(value.toLowerCase()));
                setPokemons(newData);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }else{
            getListPokemon();
        }        
    }

    return(
        <PokemonContext.Provider value={{Pokemons, IsLoading, nextPage, prevPage, Page, searchPokemon}} >
            {children}
        </PokemonContext.Provider>
    );
}
