import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Header from './components/header';
import Home from './components/home';
import BlogSection from './components/blogSection';
import ChatBot from './components/chatBot';
import Login from './components/login';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogsection' element={<BlogSection/>}/>
        <Route path='/login' element={<Login setState={false}/>}/>
        <Route path='/register' element={<Login setState={true}/>}/>
        <Route path='/chatbot' element={<ChatBot/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
