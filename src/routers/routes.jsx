import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "../page/Start";
import Home from "../page/Home";
import Character from "../page/Character";
import Error404 from "../page/Error404";

export default function RoutesProyect(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/home" element={<Home />} />
                <Route path="/character/:id" element={<Character />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}