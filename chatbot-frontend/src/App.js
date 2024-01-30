import { useState } from 'react';
import './App.css';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {MainContainer,ChatContainer,MessageList,Message,MessageInput,TypingIndicator} from "@chatscope/chat-ui-kit-react"

function App() {
  const[messages, setMessages] = useState([
   {
    meassge:"Hello, I m chatGPT!",
    sender:"chatGPT"
   }
  ])

  const handleSend = async(message) =>{
    const newMessage = {
      meassge:message,
      sender:"user",
      direction:"outgoing"
    }
    const newMessages = [...messages, newMessage] // all the old messages  + new messages

    //update our message state
    setMessages(newMessages);

    //  process message to chatGPT (send it over and see the results)
  }

  return (
    <div className="App" style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
     <div style={{position:"relative",height:"600px", width:"500px"}}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
           {messages.map((message,i) =>{
              console.log(message);
              return <Message key={i} model={message}  />
           })}
          </MessageList>
          <MessageInput 
          placeholder="Type message here.."
          onSend={handleSend}
          />

         
        </ChatContainer>
      </MainContainer>
     </div>
    </div>
  );
}

export default App;
