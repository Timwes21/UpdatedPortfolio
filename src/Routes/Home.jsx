import { useState, useContext } from "react";
import githubPhoto from "../assets/github-mark.png"
import paperpng from "../assets/paper.png"
import linkedinPhoto from "../assets/linkedin-logo.png"
import Education from "../components/Education";
import NavBar from "../components/NavBar";
import Skills from "../components/Skills";
import { ChatContext } from "../context/chatContext";


export default function Home(){
    const [ tab, setTab ] = useState("Skills");
    const { chatOpen, setChatOpen } = useContext(ChatContext);
    console.log(setChatOpen);
    



    return (
        <div className="home">
            <NavBar page={"home"}/>
            <div className="home-contents">

                <h1 className="home-title">Tim the tool man</h1>
                <div className="home-text">
                    <p>Full Stack + AI Developer from Port St. Lucie, Florida, USA</p>
                    <p>I build Full Stack Applications that integrate AI Agents</p>
                </div>
                <br />
                <ul className="my-links">
                    <button id="resume-button"><a href="Resume.pdf" target="_blank"><img id="paper-img" src={paperpng} alt="" /><span>Resume</span></a></button>
                    <li><a className="link" href="https://github.com/Timwes21/" target="_blank"><img src={githubPhoto} alt="github logo photo" /></a></li>
                    <li><a className="link" href="https://www.linkedin.com/in/tjwes21/" target="_blank"><img src={linkedinPhoto} alt="" /></a></li>
                </ul>
                <br />
                <div className="know-more">
                    <p className="home-text">Wanna Know More?</p>
                    <button onClick={()=>setChatOpen(true)}>Ask The Chat Bot</button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="qualifications">
                    <div className="qualification-headers">
                        <p className={`qualification-header ${tab === "Skills" && "clicked"}`} onClick={()=>setTab("Skills")}>Skills</p>
                        <p className={`qualification-header ${tab === "Educations" && "clicked"}`} onClick={()=>setTab("Educations")}>Education</p>
                    </div>
                    <br />
                    {tab === "Educations" && <Education/>}
                    {tab === "Skills" && <Skills/>}
                </div>
            </div>
        </div>
    )
}