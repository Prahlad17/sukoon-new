import React,{useContext, useState} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Header from './components/header';
import Home from './components/home';
import BlogSection from './components/blogSection';
import ChatBot from './components/chatBot';
import Login from './components/login';
import AssessmentResult from './components/assessmentResult';
// import { LogProvider } from './components/LogContext';
import Profile from './components/profile';
import { AuthProvider } from './components/authContext';
import { UserContext } from './components/userContext';

const App = () => {
  const user = useContext(UserContext);
  const [userId, setUserId] = useState(null); 

  const handleUserIdUpdate = (newUserId) => {
    setUserId(newUserId);
  };


  return (
    <AuthProvider onUserIdUpdate={handleUserIdUpdate}>
    <UserContext.Provider value={user ||{}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogsection' element={<BlogSection/>}/>
          <Route path='/login' element={<Login setIsLogIn={false} setState={false} />}/>
          <Route path='/register' element={<Login setState={true}/>}/>
          <Route path='/profile' element={<Profile user={user}/>}/>
          <Route path='/chatbot' element={<ChatBot/>}/>
          <Route path='/assessmentResult' element={<AssessmentResult/>}/>
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
      </AuthProvider>
  );
}

export default App;
