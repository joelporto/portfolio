import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home></Home> }></Route>
                <Route path="/Projects" element={ <Projects></Projects> }></Route>
                <Route path="/About" element={ <About></About> }></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes