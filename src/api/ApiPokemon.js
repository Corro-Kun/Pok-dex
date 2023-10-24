import {API} from "../constans/Constans";

export const getPokemon = async () => {
    return fetch(API)
        .then((response) => response.json())
        .then((json) => {
            return json.results;
        })
}