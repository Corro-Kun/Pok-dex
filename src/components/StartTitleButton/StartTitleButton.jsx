import "./StartTitleButton.css";
import Enter from "../../assets/img/enter.png"
import {pressEnter, deleteEnter} from "../../lib/PressEnter";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function StartTitleButton(){
    const navigate = useNavigate();
    useEffect(()=>{
        document.title = "Pokédex";
        pressEnter(navigate);
        
        return () => {
            document.title = "Pokédex";
            deleteEnter();
        }
    },[]);
    return(
        <div className="StartTitleButton" >
            <h1>Pokédex</h1>
            <p>Presiona enter para continuar</p>
            <img src={Enter} alt="" loading="lazy" />
        </div>
    );
}

export default StartTitleButton;