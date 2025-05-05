const qs= (e) => document.querySelector(e);
const BATMANGAMEREPO = 'BatmanGame';
const PIZZATIMEREPO = 'pizza_time';
const SPIDEYPEDIAREPO = 'spideypedia';

let batmanButton = qs('#batman-game-button')
let pizzaTimeButton = qs('#pizza-time-button')
let spideypediaButton = qs("#spideypedia-button")


function goToRepo(button, repo){
    button.addEventListener("click", () => {
        window.location.href = "https://github.com/Timwes21/" + repo;
    })
}
goToRepo(batmanButton, BATMANGAMEREPO);
goToRepo(pizzaTimeButton, PIZZATIMEREPO);
goToRepo(spideypediaButton, SPIDEYPEDIAREPO);


(async function(){
    qs("#last-commit-spideypedia").innerText = await getLastCommitDate("spideypedia");
    qs("#last-commit-pizza-time").innerText = await getLastCommitDate("pizza_time");
    qs("#last-commit-batman-game").innerText = await getLastCommitDate("BatmanGame");
})();

async function getLastCommitDate(project){
    const result = await fetch(`https://api.github.com/repos/timwes21/${project}/commits?per_page=1`);
    const date = result.headers.get("last-modified");
    const dateArray = date.split(" ");
    return dateArray[2] + " " + dateArray[1] + ", " + dateArray[3];
}


