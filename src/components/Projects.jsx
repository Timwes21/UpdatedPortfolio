import { useState } from "react";
import Card from "./Card";

export default function Projects(){
    const [form, setForm] = useState({
        name: "",
        file: ""
    });
    const [sent, setSent] = useState();
    const [message, setMessage] = useState("");
    const sendTestInfo = () => {
        console.log(form);
        
        const formData = new FormData();
        for (const [key, value] of Object.entries(form)){
            console.log(key + ":" + value);
            
            if (value){
                formData.append(key, value)
            }
            else{
                console.log("is undefind", key);
                
                return;
            }
        }
        setMessage("Loading...")
        console.log('here');
        fetch("https://backend-production-8368.up.railway.app/portfolio/test", {
            method: "POST",
            body: formData
        })
        .then(response=>{
            console.log(response);
            
            if (response.status === 200){
                console.log("status");
                
                setSent(true)
            }
        })
    }

    const setFormContent = (key, value) => {
        console.log("value", value);
        
        setForm(prev=>({
            ...prev,
            [key]: value
        }))
    }

    const workNumberTest = (
        sent?(

            <div>
            <span>Call (772) 677-1701</span>
        </div>
        ):
        <div>
            <label htmlFor="" >Name: </label>
            <input type="text" value={form.name} onChange={e=>setFormContent("name", e.target.value)}/>
            <label htmlFor="">File: </label>
            <input type="file" onChange={e=>setFormContent("file", e.target.files[0])}/>
            <p>{message}</p>
            <button onClick={sendTestInfo}>Save</button>
        </div>
    )


    const batmanGameInfo = {
        repo: "BatmanGame",
        title: "Batman Game",
        tag: "batman-game",
        description: "Protect Gotham in this fast-paced 2D action game. Face escalating waves of enemies, each tougher than the last. Battle six unique enemy types with distinct attack styles, using Batman’s skills to survive and restore order.",
        moreInfo: "/batman-game"
    }

    const workNumberInfo = {
        title: "Work Number",
        tag: "work-number",
        repo: "Work_Phone",
        description: "A phone number with twilio that routes to your number, and an AI assistant if you don't pick up. The assistant can schedule a callback, pass a message, and access documents for reference.",
        test: workNumberTest
    }


    const pizzaTimeInfo = {
        title: "Pizza Time",
        tag: "pizza-time",
        repo: "pizza_time",
        description: "A chrome extension that with the click of a button you can order a large pepperoni pizza.",
        link: "https://chromewebstore.google.com/detail/pizza-order-extension/anlmmcfcdnbjcjdppkgpcgifmelldjfi?utm_source=item-share-cb"
    }

    const spideypediaInfo = {
        title: "Spideypedia",
        tag: "spideypedia",
        repo: "spideypedia",
        description: "A web application that keeps track of all your comics with the help of an ai agent",
        link: "https://spideypedia.com"
    }

    const spideypediaMobileInfo = {
        title: "Spideypedia-Mobile",
        tag: "spideypedia-mobile",
        repo: "spideypedia_mobile",
        description: "A mobile frontend for Spideypedia. Currently only accessable by becoming a tester. Just email me, and I can send the link.",
    }

    return(

        <div className="projects">
            <Card projectTag={workNumberInfo}/>
            <Card projectTag={spideypediaInfo}/>
            <Card projectTag={spideypediaMobileInfo}/>
            <Card projectTag={pizzaTimeInfo}/>
            <Card projectTag={batmanGameInfo}/>
        </div>


    )
}