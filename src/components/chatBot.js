import { useState } from 'react';
import './chat-bot.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();


  async function generateanswer() {
    setAnswer("Loading...");
    
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAo5qcKfMW853upu_X99Zvae22hHsDlj1g",
        method: "post",
        data: {
           contents: [
            {parts :[{text:question}]},
           ],
          },
      });
      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
      console.log(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
    
  }

  const navigateChatBot = () =>{
    navigate('/chatbot');
  }

  return (
    <>
    <div className="chat-bot-container">
      <h1 className='bg-red-300' onClick={navigateChatBot}>ChatBot</h1>
      <textarea
          className='border-rounded w-full'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            // cols="30"
            // rows="100"
            placeholder='Express your Feelings'
          ></textarea>
      <button className='genAnswer' onClick={generateanswer}>Generate answer</button>
     
          <pre>{answer}</pre>
          </div>
    </>
  );
}

export default ChatBot;
