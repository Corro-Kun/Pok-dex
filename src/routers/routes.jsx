import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "../page/Start";
import Home from "../page/Home";

export default function RoutesProyect(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}