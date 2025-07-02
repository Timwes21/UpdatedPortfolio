import Card from "./Card";

export default function Projects(){
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
        frontend: "TypeScript, React, Vite",
        backend: "Python, FastAPI, Langchain, Langgraph",
        repo: "Work_Phone",
        description: "A phone number with twilio that routes to your number, and an AI assistant if you don't pick up. The assistant can schedule a callback, pass a message, and access documents for reference."
    }


    const pizzaTimeInfo = {
        title: "Pizza Time",
        tag: "pizza-time",
        frontend: "JavaScript, Chrome Extension API",
        backend: " Node.js, Express.js, Unofficial Dominos API, Docker",
        repo: "pizza_time",
        description: "A chrome extension that with the click of a button you can order a large pepperoni pizza.",
        link: "https://chromewebstore.google.com/detail/pizza-order-extension/anlmmcfcdnbjcjdppkgpcgifmelldjfi?utm_source=item-share-cb"
    }

    const spideypediaInfo = {
        title: "Spideypedia",
        tag: "spideypedia",
        frontend: "JavaScript, React, Vite",
        backend: " Node.js, Express.js, MongoDB",
        cicd: "GitHub Actions, Jest, Pytest",
        database: " MongoDB, Redis",
        AI: "Python, FastAPI, Langchain, Langgraph",
        repo: "spideypedia",
        description: "A web application that keeps track of all your comics with the help of an ai agent",
        link: "https://spideypedia.com"
    }

    const spideypediaMobileInfo = {
        title: "Spideypedia-Mobile",
        tag: "spideypedia-mobile",
        frontend: "TypeScript, React-Native, Expo",
        cicd: "GitHub Actions, Jest",
        repo: "spideypedia_mobile",
        description: "A mobile frontend for Spideypedia. Currently only accessable by becoming a tester. Just email me, and I can send the link.",
    }

    return(

        <div className="projects">
            <Card projectTag={batmanGameInfo}/>
            <Card projectTag={pizzaTimeInfo}/>
            <Card projectTag={spideypediaInfo}/>
            <Card projectTag={spideypediaMobileInfo}/>
            <Card projectTag={workNumberInfo}/>
        </div>


    )
}