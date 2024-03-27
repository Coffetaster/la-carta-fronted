import { useEffect, useState } from "react";
import ChatbotButton from "./ChatBot";
import ChatContent from "./BotContent";


export default function Bot({booking}) {
  
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleChatbotClick = () => {
    if(isChatbotOpen){
      setIsChatbotOpen(false);
    }
    else{
     setIsChatbotOpen(true);
    }
  };
  return (
    <>
      
      <div>
        <ChatbotButton onClick={handleChatbotClick} />
        {isChatbotOpen && (
          <div>
            
            <ChatContent booking={booking} onClick={handleChatbotClick}/>
            
          </div>
        )}
    </div>
      
    </>
  );
}
