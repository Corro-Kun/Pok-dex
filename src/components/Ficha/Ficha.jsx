import "./Ficha.css";
import { useNavigate } from "react-router-dom";

function Ficha({name, id, image, type}){
    const navigate = useNavigate();
    return(
        <div className="Ficha" onClick={()=> navigate("/character/"+id)} >
            <div className="Ficha-Title" >
                <h3>N°{id}</h3>
                <h3>{name}</h3>
            </div>
            <div className="Ficha-Img" >
                <img src={image} alt="pokemon" loading="lazy" />
            </div>
            <div className="Ficha-Tipo" >
                <h3>Tipo: {type}</h3>
            </div>
        </div>
    );
}

export default Ficha;