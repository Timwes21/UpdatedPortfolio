import NavBar from "../components/NavBar";
import gameScreenshot from "../assets/batman-page/gameplay1.png";

export default function BatmanGamePage(){
    const download = () => {
        window.open("BatmanGame-1.0.exe")
    }
    return (
        <div className="batman-page">
            <NavBar/>
                <div className="batman-game-intro">
                    <div className="batman-intro-text">
                        <h1 className="batman-title">The Batman</h1>
                        <p className="batman-game-description">The player must beat all enemies in each wave. As you progress, your health increases. but so does the diffulcty of the waves. With a small arsenal of smoke grenades and batarangs, along with your martial arts prowess, the enemies have as much fighting chance as you!</p>
                    </div>
                    <div className="download-button-con">
                        <button onClick={download} className="download-game-button">Download for Windows</button>
                    </div>
                </div>
                <br />
                <br />
                <img id="batman-screenshot" src={gameScreenshot} alt=""/>

                <br/>
                <br/>
                <br/>
                <div/>
                
            </div>
    )
}