import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
// import { ChatMessage } from './components/ChatMessage'
import ChatMessages from './components/ChatMessages'

import './App.css'





      
      
      

function App() {
        const [chatMessages,setChatMessages] = useState([]);
        return(
          <div className='app'>
          
          <ChatMessages
            chatMessages = {chatMessages}
          />
          <ChatInput
            chatMessages = {chatMessages}
            setChatMessages = {setChatMessages}
          />
        </div> 
        )
      }

export default App
