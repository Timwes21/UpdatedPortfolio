import { useState, useEffect, useRef, useContext } from "react";
import { ChatContext } from "../context/chatContext";

export default function ChatBox({open}){
    const [messages, setMessages ] = useState([])
    const [ userMessage, setUserMessage ] = useState("");
    const { chatOpen, setChatOpen } = useContext(ChatContext);
    console.log(chatOpen, setChatOpen);
    
    const ws = useRef(null);
    useEffect(()=> {
        ws.current = new WebSocket('wss://portfolio-chat-bot-production.up.railway.app/ws');
        ws.current.onopen = () => {
            console.log("connected to ws");
        }


        ws.current.onmessage=(event)=>{
            console.log(event.data);
            addNewMessage("agent", event.data);
            
        }
        ws.current.onerror= (err) =>{
            console.log(err);
        }
        ws.current.onclose = (event) =>{
            console.log("ws closed", event);   
        }
    }, [])

    function addNewMessage(sender, message){
        setMessages(prev=>[
            ...prev,
            [sender, message]
        ])
    }
    

        

    return (
        <>
            <button onClick={()=>{
                setChatOpen(true)
                console.log(chatOpen);
                
                }} className={`chat-button ${chatOpen? "close":""}`}>Chat with Tim Chat Bot</button>
            <div className={`chat ${chatOpen? "": "open"}`}>
            <div className="chat-header">
                <h3>Timothy</h3>
                <button onClick={()=>{
                    setChatOpen(false)
                    console.log(chatOpen);
                    
                    }} id="close-chat">close</button>
            </div>
            <div className="messages">
                {messages.map((value, _)=>(
                    
                    <p key={_} className={value[0] + "-message push"}>{value[1]}</p>
                ))}
            </div>
            <div className="reply-to-agent">
                <input value={userMessage} onChange={e=>setUserMessage(e.target.value)} className="user-input" type="text"/>
                <button onClick={()=>{
                    if (userMessage.length > 0){
                        ws.current?.send(userMessage);
                        addNewMessage("user", userMessage);
                        setUserMessage("")
                    }
                }} className="user-send-button">Send</button>
            </div>
            </div>
        </>
    )
}