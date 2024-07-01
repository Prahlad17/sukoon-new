import { useState } from 'react';
// import '../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons';
// import '../assets/css/Chatbot.css';
import './chat-bot.css';
import axios from 'axios';

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [messages, setMessages] = useState([]);

  async function generateAnswer() {
    setMessages((prevMessages) => [...prevMessages, { text: question, user: true }]);
    setAnswer("Loading...");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyAo5qcKfMW853upu_X99Zvae22hHsDlj1g ",
        method: "post",
        data: {
          contents: [
            { parts: [{ text: question }] },
          ],
        },
      });
      const botAnswer = response.data.candidates[0].content.parts[0].text;
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: question, user: true },
        { text: botAnswer, user: false },
      ]);
      setAnswer("");
      setQuestion("");
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: question, user: true },
        { text: "Error generating answer. Please try again.", user: false },
      ]);
      setAnswer("");
    }
  }

  return (
    <div className="chatbot-container">
      <h1>Chatbot</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user ? 'user' : 'bot'}`}>
            <div className="icon">
              {msg.user ? (
                <FontAwesomeIcon icon={faUser} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faRobot} size="2x" />
              )}
            </div>
            <div className="content">{msg.text}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows="1"
          placeholder="Express your Feelings"
        ></textarea>
        <button onClick={generateAnswer}>➤</button>
      </div>
    </div>
  );
}

export default Chatbot;
