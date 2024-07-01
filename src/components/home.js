import React from 'react';
import Header from './header';
import Assesment from './assesment';
import { useNavigate } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight , faCalendar,faUser} from '@fortawesome/free-solid-svg-icons'; 
import styled from 'styled-components';
import Img from '../assets/Screenshot 2024-06-26 170133.png';
import {UserContext} from './userContext';
import './home.css';
import chatbotImg from '../assets/chatbot-img.png'
import BlogSection from './blogSection';
import Footer from './footer';


const Home = () => {
  const navigate = useNavigate();

  const onImgClick = () =>{
    navigate('/chatbot');
  }
  return (
    <>
        <Header />
        <Container>
        <BlogSection/>
    <UserContext.Consumer>
    {userId =>(
    <Assesment userId = {userId}/>
    )}
    </UserContext.Consumer>
        
        </Container>
        
        <img src={chatbotImg} data-toggle='tooltip' data-placement='top' title='Express your Feelings' alt={chatbotImg} onClick={onImgClick}/>
        {/* <Foot>
        <Footer/>
        </Foot> */}
       
    </>
  )
}

export default Home

const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
`;

const Foot = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 1275px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  
`






