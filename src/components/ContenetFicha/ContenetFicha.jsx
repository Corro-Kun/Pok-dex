import { usePokemon } from "../../hooks/usePokemon";
import Ficha from "../Ficha/Ficha";
import "./ContenetFicha.css";

function ContenetFicha(){
    const {Pokemons} = usePokemon();
    return(
        <div className="ContenetFicha" >
            {
                Pokemons?.map((pokemon, index)=>(
                    <Ficha key={index} name={pokemon.name} />
                ))
            }
        </div>
    )
}

export default ContenetFicha;