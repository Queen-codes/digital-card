import Avatar from "../assets/avatar.png";
import Details from "./Details";
import About from "./About";
import Interest from "./Interest";
import Footer from "./Footer";

function Container () {
    return (
        <div className="main-container">
            <img src={Avatar} alt="Laura" className="avatar"/>
            <Details/>
            <About/>
            <Interest/>
            <Footer/>
        </div>
    )
}

export default Container;