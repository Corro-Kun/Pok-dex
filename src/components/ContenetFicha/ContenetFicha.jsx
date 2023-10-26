import { usePokemon } from "../../hooks/usePokemon.jsx";
import Ficha from "../Ficha/Ficha";
import "./ContenetFicha.css";
import logo from "../../assets/img/pokeball.png"

function ContenetFicha(){
    const { Pokemons, IsLoading, nextPage, prevPage, Page, searchPokemon } = usePokemon();
    return(
        <div>
            <div className="Contenet-Bar" >
                <h2>Pokédex</h2>
                <input type="text" placeholder="search..." onChange={(e)=> searchPokemon(e)} />
                <div className="Logo-Bar" onClick={()=> window.open("https://pokeapi.co/api/v2/pokemon")} >
                    <img src={logo} alt="" loading="lazy" />
                </div>
            </div>
            <div className="ContenetFicha" >
                {
                    IsLoading ?
                        <h1>Cargando...</h1>            
                    :
                        Pokemons.map((pokemon, index)=>(
                            <Ficha key={index} name={pokemon.name} id={pokemon.id} image={pokemon.image} type={pokemon.types}  />
                        ))
                }
            </div>
            <div className="Contenet-Page" >
                <div>
                    {
                        Page > 0 ?
                            <button onClick={()=> prevPage()} >Anterior</button>
                        :
                        null
                    }
                    <h2>{Page + 1}</h2>
                    <button onClick={()=> nextPage()} >Siguiente</button>
                </div>
            </div>
        </div>
    )
}

export default ContenetFicha;