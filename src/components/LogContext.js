import { createContext,useState } from "react";
 export const LogContext = createContext();

 export const LogProvider = ({children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user,setUser] = useState(null);

    const login = (userData) =>{
        setIsLoggedIn(true);
        setUser(userData);
        localStorage.setItem('userName',userData.name);
    };

    const logout = () =>{
        setIsLoggedIn(false);
        setUser(null);
        localStorage.removeItem('userName');
    };

    return (
        <LogContext.Provider value={{isLoggedIn,user,login,logout}}>
            {children}
        </LogContext.Provider>
    );
 };