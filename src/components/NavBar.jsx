import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


export default function NavBar({page}){
    const [ infoOpen, setInfoOpen ] = useState(false);
    const [ homeOpen, setHomeOpen ] = useState(false);
    const [ projectsOpen, setProjectsOpen ] = useState(false)

    useEffect(()=> {
        setTimeout(()=>{
            switch(page){
                case "home":
                    setHomeOpen(true);
                    break;
                case "projects":
                    setProjectsOpen(true)
                    break;
            }
        }, 100)
    }, [])
    return (
    <>
    <nav>
        <label className="logo">Portfolio</label>
        <div className="page-changers">
            <Link to={"/"} className={`page-changer ${homeOpen && "open"}`}>Home</Link>
            <Link to={"/projects"} className={`page-changer ${projectsOpen && "open"}`}>Projects</Link>
        </div>
        <ul className="my-links">
            <li><a onClick={()=>setInfoOpen(!infoOpen)} className="contact-info-button">Contact</a></li>
        </ul>
    </nav>
    <ul className={`contact-info ${infoOpen? "open": ""}`}>
        <li><span className="contact-heading">Phone Number: </span>772-621-0972</li>
        <li><span className="contact-heading">Email: </span>timothy.wesley99@yahoo.com</li>
        <li><span className="contact-heading">AI Assistant: </span>772-247-6154</li>
    </ul>
    </>
    )
}