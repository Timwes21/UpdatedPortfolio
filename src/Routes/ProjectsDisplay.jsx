import NavBar from "../components/NavBar";
import ChatBox from "../components/ChatBox";
import Projects from "../components/Projects";

export default function ProjectsDisplay(){
    return (
           <div id="home-page-body">
            <NavBar page={"projects"}/>
            <Projects/>
        </div>
    )
}