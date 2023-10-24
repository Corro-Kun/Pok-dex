import BodyWallpaper from "../components/BodyWallpaper/BodyWallpaper";
import video from "../assets/video/BackgroundHome.mp4"
import ContenetFicha from "../components/ContenetFicha/ContenetFicha";
import { PokemonProvider } from "../context/Pokemon";

export default function Home(){
    return(
        <BodyWallpaper video={video} >
            <PokemonProvider>
                <ContenetFicha />
            </PokemonProvider>
        </BodyWallpaper>
    );
}
