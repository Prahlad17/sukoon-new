import React, {createContext,useState, useEffect} from 'react';

const UserContext = createContext(null);

const UserProvider =({children}) =>{
    const [userId,setUserId] = useState(null);

    useEffect(() =>{
        const fetchedUserId = async () =>{
            try{
                const storedUserId = localStorage.getItem('userName');
                if(storedUserId){
                    setUserId(storedUserId);
                    return;
                }
            } catch(error){
                console.log(error);
            }
        };
        fetchedUserId();
        
    },[]);

    return (
        <UserContext.Provider value={userId}>
            {children}
        </UserContext.Provider>
    );
};

export {UserContext,UserProvider};