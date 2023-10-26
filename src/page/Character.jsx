import BodyWallpaper from "../components/BodyWallpaper/BodyWallpaper"
import video from "../assets/video/BackgroundCharacter.mp4"
import InfoCharacter from "../components/InfoCharacter/InfoCharacter"
import { PokemonDetailsProvider } from "../context/PokemonDetals"

// Objetivo: Mostrar la información de un personaje en específico
export default function Character(){
    return(
        <BodyWallpaper video={video}>
            <PokemonDetailsProvider>
                <InfoCharacter />
            </PokemonDetailsProvider>
        </BodyWallpaper>
    )
} 

