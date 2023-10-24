import "./BodyWallpaper.css";

function BodyWallpaper({children, video}) {
    return(
        <div className="BodyWallpaper" >
            <video className="video-Background" muted autoPlay loop >
                <source src={video} type="video/mp4" />
                no se puede reproducir el video
            </video>
            <div className="BodyWallpaper-Div" >
                {children}
            </div>
        </div>
    );
}

export default BodyWallpaper;