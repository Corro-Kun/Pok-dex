import { useNavigate } from "react-router-dom";
import { usePokemonDetails } from "../../hooks/usePokemonDetals";
import "./InfoCharacter.css"
import { useEffect } from "react";

function InfoCharacter(){
    const {Pokemon} = usePokemonDetails();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!Pokemon){
            navigate("/home");
        }
        if(Pokemon?.name){
            document.title = Pokemon?.name;
        }
        return () => document.title = "Pokédex";
    },[]);
    return(
        <div className="InfoCharacter-Render" >
            <div className="InfoCharacter-Main" >
                <div className="InfoCharacter-Name" >
                    <div>
                        <h2>N° {Pokemon.id}</h2>
                    </div>
                    <div>
                        <h2>{Pokemon.name}</h2>
                        <p>{Pokemon?.types?.[0]?.type?.name}</p>
                    </div>
                    <div onClick={()=> navigate("/home")} >
                        <h2>X</h2>
                    </div>
                </div>
                <div className="InfoCharacter-image" >
                    <img src={Pokemon?.sprites?.other?.["official-artwork"].front_default} alt="" loading="lazy" />
                </div>
                <div className="InfoCharacter-Data" >
                    <h3>Data</h3>
                    <div className="Render-Data-InfoCharacter" >
                        <div>
                            <p>height: {Pokemon.height * 0.1}m</p>
                            <p>weight: {Pokemon.weight * 0.1}kg</p>
                        </div>
                        <div>
                            <p>base experience: {Pokemon.base_experience}xp</p>
                            <p>hp: {Pokemon?.stats?.[0]?.base_stat}</p>
                            <p>attack: {Pokemon?.stats?.[1]?.base_stat}</p>
                            <p>defense: {Pokemon?.stats?.[2]?.base_stat}</p>
                            <p>special attack: {Pokemon?.stats?.[3]?.base_stat}</p>
                            <p>special defense: {Pokemon?.stats?.[4]?.base_stat}</p>
                            <p>speed: {Pokemon?.stats?.[5]?.base_stat}</p>
                        </div>
                    </div>
              </div>
            </div>
        </div>
    );
}

export default InfoCharacter;