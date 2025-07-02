import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card({projectTag}){
    const [ lastCommit, setLastCommit ] = useState();
    const frontId = projectTag.tag + "-front";
    const buttonId = projectTag.tag + "-button";
    const commitID = "last-commit-" + projectTag.tag;
    console.log(projectTag);

    useEffect(()=>{
        (async()=>{

            const result = await fetch(`https://api.github.com/repos/timwes21/${projectTag.repo}/commits?per_page=1`);
            const date = result.headers.get("last-modified");
            const dateArray = date.split(" ");
            setLastCommit(dateArray[2] + " " + dateArray[1] + ", " + dateArray[3]);
        })()
    }, [])
    
    return (
        <div className="card">
            <div className="front" id={frontId}><p className="card-title">{projectTag.title}</p></div>
            <div className="back">
                <div className="back-contents">

                <h2 className="card-headings">Description</h2>
                
                <p className="text">{projectTag.description} <br /> {projectTag.link &&  <a href={projectTag.link} target="_blank"> Go to Application</a>}{projectTag.moreInfo && <Link to={projectTag.moreInfo}>More Info</Link>}</p>
                <br />
                <div className="tech-used">
                    <hr/>
                    {projectTag.frontend && <span><span className="subheading">Frontend: </span>{projectTag.frontend} <br /></span>}
                    {projectTag.backend && <span><span className="subheading">Backend: </span>{projectTag.backend} <br /></span>}
                    {projectTag.database && <span><span className="subheading">Database(s): </span>{projectTag.database} <br /></span>}
                    {projectTag.AI && <span><span className="subheading">AI: </span>{projectTag.AI} <br /></span>}
                    {projectTag.cicd && <span><span className="subheading">CI/CD: </span>{projectTag.cicd} <br /></span>}
                    <hr/>
                </div>
                </div>
                <div className="source-code-con">
                    <a href={"https://github.com/Timwes21/" + projectTag.repo} target="_blank" className="source-code" id={buttonId}>Source Code</a>
                    <p className="last-commit">
                        <span className="last-commit-heading">Last push: {lastCommit}</span>
                        <span id={commitID}></span>
                    </p>
                </div>
            </div>
        </div>
    )
}