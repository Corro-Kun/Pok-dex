import "./Ficha.css";

function Ficha({name}){
    return(
        <div className="Ficha" >
            <div className="Ficha-Title" >
                <h3>N°1</h3>
                <h2>{name}</h2>
                <h3>---</h3>
            </div>
            <div className="Ficha-Img" >
                <img src="https://www.pngitem.com/pimgs/m/528-5285536_charmander-pixel-art-hd-png-download.png" alt="" loading="lazy" />
            </div>
            <div className="Ficha-Tipo" >
                <h3>Tipo</h3>
            </div>
        </div>
    );
}

export default Ficha;