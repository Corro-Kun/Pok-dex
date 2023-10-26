import {API, API_OFF_LIMIT} from "../constans/Constans";

export const getPokemon = async () => {
    const response = await fetch(API);
    const json = await response.json();
    const data = json?.results;
    const data2 = await Promise.all(
        data.map(async (result) => {
            const res = await getComplement(result.url);
            return {
                id: res?.id,
                name: res?.name,
                image: res.sprites?.other?.["official-artwork"]?.front_default,
                types: res?.types[0]?.type.name,
            };
        })
    );
    return data2;
}

export const getComplement = async (url) =>{
    return fetch(url)
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
}

export const getPokemonDetail = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await response.json();
    return json;
}

export const getPokemonPage = async (number) => {
    let page = number * 20;
    console.log(page);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);
    const json = await response.json();
    const data = json?.results;
    const data2 = await Promise.all(
        data.map(async (result) => {
            const res = await getComplement(result.url);
            return {
                id: res?.id,
                name: res?.name,
                image: res.sprites?.other?.["official-artwork"]?.front_default,
                types: res?.types[0]?.type.name,
            };
        })
    );
    return data2;
}

export const getPokemonOffLimit = async () => {
    const response = await fetch(API_OFF_LIMIT);
    const json = await response.json();
    const data = json?.results;
    const data2 = await Promise.all(
        data.map(async (result) => {
            const res = await getComplement(result.url);
            return {
                id: res?.id,
                name: res?.name,
                image: res.sprites?.other?.["official-artwork"]?.front_default,
                types: res?.types[0]?.type.name,
            };
        })
    );
    return data2;
}