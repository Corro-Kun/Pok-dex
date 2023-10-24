import video from "../assets/video/BackgroundStart.mp4"
import BodyWallpaper from "../components/BodyWallpaper/BodyWallpaper";
import StartTitleButton from "../components/StartTitleButton/StartTitleButton";

function Start(){
    return(
        <BodyWallpaper video={video} >
            <StartTitleButton />
        </BodyWallpaper>
    );
}

export default Start;