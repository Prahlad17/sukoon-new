import React,{useState,useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from './authContext';
import Profilepic from '../assets/Profilepic.png';
// import Assesment from './assesment';
const Header = () => {
    const {isLoggedIn, user, logout} = useContext(AuthContext);

    const navigate = useNavigate();

    const [showOptions,setShowOptions] = useState(false);
    
    const onPicClick = () =>{
        setShowOptions(!showOptions);
    }
    const showProfile =() =>{
        navigate('/profile');
    }
  return (
    <>
    
    <HeaderCon>
        <HeaderTitle>Sukoon</HeaderTitle>
         { isLoggedIn ? (
            <div style={{position: 'relative'}}>
            <Propic src={Profilepic} onClick ={onPicClick} alt='Profile picture'/>
            {showOptions &&(
                <div style={{position: 'absolute',right: 0,background:'white',color:'black',border:'1px solid #ccc',borderRadius:'5px',padding: '10px',zIndez:1}}>
                {console.log(user?.name==null)}
                    <ProButton onClick={showProfile}>{user?.name}</ProButton>
                    <ProButton onClick={()=> {logout(); navigate('/');}}>Logout</ProButton>
                    </div>
            )}
                </div>
            
         ) : (
            <Link to='/login'><Button className='login-btn'>Login/Register</Button></Link>
         )}
    </HeaderCon>
    </>
  );
};

export default Header;

const HeaderCon = styled.div`
    ${'' /* position: fixed; */}
    background-color: #333433;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
`;
const HeaderTitle = styled.div`
    color: white;
    font-size: 35px;
    font-weight: normal;
    padding: 10px;
    margin: 0;
    text-align: center;
    padding-left: 500px;
    
`;
const Button = styled.button`
    padding: 5px 10px;
    margin: 5px;
    margin-top: 7px;
    background: orange;
    color: white;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 5px;
    align: right;
`;

const Propic = styled.div`
    background-image: url('../assests/Profilepic.png');
    padding: 5px 10px;
    margin: 5px;
    margin-top: 7px;
    height: 50px;
    width: 50px;
    
    color: white;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 50%;
    align: right;
`;

const ProButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  text-align: left;
  transition: all 0.2s ease-in-out; /* Smooth hover effect */
`;

