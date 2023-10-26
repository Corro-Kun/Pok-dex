import { useContext } from "react";
import { PokemonDetailsContext } from "../context/PokemonDetals";

export function usePokemonDetails() {
    const context = useContext(PokemonDetailsContext);

    if (!context) {
        throw new Error("usePokemonDetails must be used within a PokemonDetailsProvider");
    }

    return context;
}