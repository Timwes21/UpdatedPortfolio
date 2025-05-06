const qs = (e) => document.querySelector(e);
const ce = (e) => document.createElement(e);
const BATMANGAMEREPO = 'BatmanGame';
const PIZZATIMEREPO = 'pizza_time';
const SPIDEYPEDIAREPO = 'spideypedia';

let batmanButton = qs('#batman-game-button');
let pizzaTimeButton = qs('#pizza-time-button');
let spideypediaButton = qs("#spideypedia-button");
let toggleChatButton = qs(".chat-button");
let closeChatButton = qs("#close-chat");
let messagesDiv = qs(".messages");


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


toggleChatButton.addEventListener("click", ()=>{
    qs(".chat").classList.toggle("open");
    toggleChatButton.classList.toggle("close");

})

closeChatButton.addEventListener("click", ()=>{
    qs(".chat").classList.toggle("open");
    toggleChatButton.classList.toggle("close");

})
function addNewMessage(writer, message){
    let newUserMessage = ce("p");
    newUserMessage.className = writer + "-message"
    newUserMessage.innerText = message;
    messagesDiv.appendChild(newUserMessage);
    setTimeout(()=>{
        newUserMessage.classList.toggle("push")
        
    }, 50)
}

const ws = new WebSocket('wss://portfolio-chat-bot-production.up.railway.app/ws');
ws.onopen = () => {
    console.log("connected to ws");
}



addUserMessage()

ws.onmessage=(event)=>{
    console.log(event.data);
    addNewMessage("agent", event.data)

}
ws.onerror= (err) =>{
    console.log(err);
}
ws.onclose = (event) =>{
    console.log("ws closed", event);   
}
function addUserMessage(){
    const userInput = qs(".user-input");
    const userSendButton = qs(".user-send-button");
    userSendButton.addEventListener("click", ()=>{
        if (userInput.value.length > 0){
            addNewMessage("user", userInput.value)
            ws.send(userInput.value);
            userInput.value = "";
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
    })
}
