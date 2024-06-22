import React from 'react';
import Header from './header';
import Assesment from './assesment';
import { useNavigate } from 'react-router-dom';

import './home.css';
import chatbotImg from '../assets/chatbot-img.png'

const Home = () => {
  const navigate = useNavigate();

  const onImgClick = () =>{
    navigate('/chatbot');
  }
  return (
    <>
        <Header />
        <Assesment/>
        
        <img src={chatbotImg} data-toggle='tooltip' data-placement='top' title='Express your Feelings' alt={chatbotImg} onClick={onImgClick}/>
    </>
  )
}

export default Home

