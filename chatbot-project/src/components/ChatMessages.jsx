import useAutoScroll from './useAutoScroll'
import { ChatMessage } from "./ChatMessage";

function ChatMessages({chatMessages}){
        const chatMessagesRef = useAutoScroll(chatMessages);
        return(<>
          {chatMessages.length === 0 && (<div className='welcome'>Welcome to ChatBot Project! Send a message using the textbox below.</div>)}
          <div className='chat-messages-container' ref={chatMessagesRef}>
          
            {chatMessages.map((chatMessage)=>{
                  return(
                    <ChatMessage 
                      key={chatMessage.id}
                      message={chatMessage.message}
                      sender={chatMessage.sender}
                      
                    />
                  )
                })}
          </div>
          </>
        )
      }

export default ChatMessages;      