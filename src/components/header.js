import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
// import Assesment from './assesment';
const Header = () => {
    const [loggedIn,setLoggedIn] = useState();
  return (
    <>
    <HeaderCon>
        <HeaderTitle>Sukoon</HeaderTitle>
            <Link to='/login' ><Button className='login-btn' >Login/Register</Button></Link>
    </HeaderCon>
    </>
  )
}

export default Header;

const HeaderCon = styled.div`
    ${'' /* position: fixed; */}
    background-color: #333333;
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

