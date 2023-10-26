import BodyWallpaper from "../components/BodyWallpaper/BodyWallpaper";
import video from "../assets/video/Background404.mp4";
import Error from "../components/Error/Error";

// Objetivo: Mostrar un mensaje de error 404

export default function Error404() {
    return(
        <BodyWallpaper video={video} >
            <Error />
        </BodyWallpaper>
    );
}