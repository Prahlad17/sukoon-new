import React, { useState } from 'react';
import './loginpage.css';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = ({setState}) => {
  //login creds starts from here
  const [loginEmail,setLoginEmail] = useState();
  const [loginPassword,setLoginPassword] = useState();
  
  const handleLoginSubmit =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{loginEmail,loginPassword})
    .then(result =>{
      console.log(result)
      if(result.data ==="Success"){
      navigate('/')
      }
      else if(result.data==="The password is incorrect"){
        setLogin(true);
      }
    })
    .catch(err=>console.log(err))
  }


  //login creds till here


  //registration starts from here
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [login,setLogin] = useState();
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result)
      if(result.data==="Used"){
        setLogin(false);
        navigate('/register')
      }else{
      navigate('/login')
      
      setIsActive(false);
      }
    })
    .catch(err=> console.log(err))
  }
  //registration till here

  const [isActive, setIsActive] = useState(setState);
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/register');
    setIsActive(true);
  };

  const onChange =()=>{
    navigate('/login');
  }

  const handleLoginClick = () => {
    navigate('/login');
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" required onChange={(e)=>setName(e.target.value)}/>
          <input type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={onChange}>Sign Up</button>
          {!login && <p>The email is already used</p>}
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLoginSubmit}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" required onChange={(e)=>setLoginEmail(e.target.value)}/>
          <input type="password" placeholder="Password" required onChange={(e)=>setLoginPassword(e.target.value)}/>
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
        { login && <p>The password is incorrect</p>}
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p> Enter your personal details to use all of site features</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p> Register with your personal details to use all of site features</p>
            <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
