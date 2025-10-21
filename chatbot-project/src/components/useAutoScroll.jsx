import { useEffect,useRef } from 'react'

function useAutoScroll (chatMessages){
        const chatMessagesRef = useRef(null);
        useEffect(()=>{
          const containerElem = chatMessagesRef.current;
          if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        },[chatMessages]);
        return chatMessagesRef;
      }

export default useAutoScroll;      