import Loading from '../assets/loading-spinner.gif'
import { useState } from 'react'
import { Chatbot } from 'supersimpledev'

export function ChatInput({chatMessages,setChatMessages}){                //in REACT comp names always start with captial letter first
        const [inputText,setInputText] = useState('');
        function saveInputText(event){
          setInputText(event.target.value);
        }

        function saveInputTextKeyDown(event){
          if(event.key === 'Enter') sendMessage();
          if(event.key === 'Escape') setInputText('');
        }

        // function clearMessage(){

        // }

        async function sendMessage(){
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID()
            }
          ] 
          setChatMessages(newChatMessages);

          // const response = Chatbot.getResponse(inputText);
          
          setChatMessages([
            ...newChatMessages,
            {
              message: <img src={Loading} className='spinner'/>,
              sender: 'robot',
              id: 'Loading'
            }
          ]);

          setInputText('');

          await new Promise(resolve => setTimeout(resolve,500));
          const response = Chatbot.getResponse(inputText);
          const updatedMessages = newChatMessages.filter(msg=>msg.id !== 'Loading');

          setChatMessages([
            ...updatedMessages,
            {
              message:response,
              sender:'robot',
              id:crypto.randomUUID()
            }
          ]);
        }

        return (
          <div className='input-holder'>
            <input className='input-bar' placeholder='Send a message to ChatBot' size='30'
              onChange={saveInputText} value={inputText} onKeyDown={saveInputTextKeyDown} />
            <button onClick={sendMessage} className='send-button'>Send</button>
            <button onClick={()=>{setInputText('')}} className='send-button' style={{backgroundColor:'gray', color:'black'}} >Clear</button>
          </div>  
        );
      }