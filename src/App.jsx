import './App.css';
import ChatBox from './components/ChatBox';
import Home from './Routes/Home';
import ProjectsDisplay from './Routes/ProjectsDisplay';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { ChatContext } from './context/chatContext';
import BatmanGamePage from './Routes/BatmanGamePage';


function App() {
  const [ chatOpen, setChatOpen ] = useState(false);
  

  return (
    <ChatContext.Provider value={{chatOpen, setChatOpen}}>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<ProjectsDisplay/>}/>
          <Route path='/batman-game' element={<BatmanGamePage/>}/>
        </Routes>
      <ChatBox/>
    </BrowserRouter>
    </ChatContext.Provider>

  )
}

export default App
