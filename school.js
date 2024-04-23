import Academic from "./academic";
import Aboutus from "./aboutus";
import Homecontent, { Headercontent } from "./home";
import {Routes, Route} from "react-router-dom";



function Schoolweb(){
    return(
        <>
        <Headercontent/>
        <Routes>
            <Route path="/" element={<Homecontent/>}></Route> 
            <Route path="/academics" element={<Academic/>}></Route>
            <Route path="/campus" element={<Aboutus/>}></Route>

        </Routes>
        </>
    )
}
export default Schoolweb;