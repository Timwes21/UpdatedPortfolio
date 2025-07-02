import pythonPng from "../assets/python.png";
import javascriptPng from "../assets/javascript.png";
import javaPng from "../assets/java.png";
import reactPng from "../assets/react.png"
import expressPng from "../assets/express.png"
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
        return <li key={title} className="skill"><img className="emblem" src={emblem} alt="" /><span>{title}</span></li>
    }

    const languages = [
        [pythonPng, "Python"],
        [javascriptPng, "JavaScript"],
        [javaPng, "Java"]
    ]

    const libraries = [
        [reactPng, "React"],
        [reactPng, "React Native"],
        [expressPng, "Express"],
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

    return (
        <div className="qualification-content">
            <div><span className="skills-header">Languages</span>: 
                <ul className="skills">
                    {languages.map(([emblem, value])=>(
                        skill(emblem, value)                        
                    ))}
                    
                </ul>
            </div>
            <div><span className="skills-header">Libraries/Frameworks</span>: 
                <br />
                <ul className="skills">
                    {libraries.map(([emblem, value])=>(
                        skill(emblem, value)                        
                    ))}
                </ul>

            </div>
            <div>
                <span className="skills-header">Databases</span>
                <ul className="skills">
                    {databases.map(([emblem, value])=>(
                        skill(emblem, value)                        
                    ))}

                </ul>
            </div>
            <div><span className="skills-header">Testing/CICD</span>
                <ul className="skills">
                    {testing.map(([emblem, value])=>(
                        skill(emblem, value)                        
                    ))}
                </ul>
                    
            
            </div>
        </div>
    )

}