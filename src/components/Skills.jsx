import pythonPng from "../assets/python.png";
import javascriptPng from "../assets/javascript.png";
import rustPng from "../assets/rust.png";
import reactPng from "../assets/react.png"
import fastapiPng from "../assets/fastapi.png"
import mongodbPng from "../assets/mongodb.png"
import redisPng from "../assets/redis.png"
import faissPng from "../assets/faiss.png"
import langchainPng from "../assets/langchain.png"
import langgraph from "../assets/langgraph.png"
import pytestPng from "../assets/pytest.png"
import jestPng from "../assets/jest.png"
import githubPng from "../assets/github-mark.png"


export default function Skills(){

    const skill = (emblem, title) => {
        return  <li key={title} className="skill">
                    <img className="emblem" src={emblem} alt="" />
                    <span className="skill-name">{title}</span>
                </li>
    }

    const languages = [
        [pythonPng, "Python"],
        [javascriptPng, "JavaScript"],
        [rustPng, "Rust"]
    ]

    const libraries = [
        [reactPng, "React"],
        [reactPng, "React Native"],
        [rustPng, "Axum"],
        [fastapiPng, "FastAPI"],
        [langchainPng, "LangChain"],
        [langgraph, "LangGraph"]
    ]

    const databases = [
        [mongodbPng, "MongoDB"],
        [redisPng, "Redis"],
        [faissPng, "FAISS"]
    ]

    const testing = [
        [pytestPng, "Pytest"],
        [jestPng, "Jest"],
        [githubPng, "GitHub Actions"]
    ]

    const listSkills = (skillsList, skillName) => {
        return (
            <div>
                <span className="skills-header">{skillName}</span>: 
                <ul className="skills">
                    {skillsList.map(([emblem, value])=>(
                        skill(emblem, value)            
                    ))}
                    
                </ul>
            </div>
        )
    }

    return (
        <div className="qualification-content">
            {listSkills(languages, "Languages")}
            {listSkills(libraries, "Libraries/Frameworks")}
            {listSkills(databases, "Databases")}
            {listSkills(testing, "Testing/CICD")}
        </div>
    )

}