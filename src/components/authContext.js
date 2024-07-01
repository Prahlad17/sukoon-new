import { createContext,useState,useEffect } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    user:null,
    email: null,
    login: () =>{},
    logout: () => {}
});

export const AuthProvider = ({children}) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        return storedIsLoggedIn === 'true';
    });

    const [user,setUser] = useState(null);
    const [email,setEmail] = useState(null);

    const login = (userData,callback) =>{
        setIsLoggedIn(true);
        setUser(userData.name);
        setEmail(userData.email);
        localStorage.setItem('userName',userData.name);
        localStorage.setItem('isLoggedIn',true);
        localStorage.setItem('userId',userData.name);
        localStorage.setItem('userEmail',userData.email);

        callback && callback();
    };

    const logout = () =>{
        setIsLoggedIn(false);
        setUser(null);
        setEmail(null);
        localStorage.removeItem('userName');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
    };

    return (
        <AuthContext.Provider value={{isLoggedIn, user, email, login, logout}}>
        {children}
        </AuthContext.Provider>
    );
};