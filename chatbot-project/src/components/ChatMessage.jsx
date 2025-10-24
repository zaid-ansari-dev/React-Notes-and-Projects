import bot from '../assets/bot.png'
import person from '../assets/person.png'
import './ChatMessageText.css'
import dayjs from 'dayjs'

export function ChatMessage({message,sender}){ //destructuring
        const time = dayjs().format('h:mma');
        return(
          
            
            <div className={sender === 'user'? 'user-one': 'robot-one'}>
              {sender === 'robot' && 
              (<img src= {bot} className='pic'/>)}
              <div className='chat-message-text'>
                {message}
                <div className='currentTime'>{time}</div>
              </div>
              {sender === 'user' && <img src= {person} className='pic' />}
            </div>  
          
        )
      }