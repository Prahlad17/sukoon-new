import { createContext,useState } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({children}) => {
    const [score, setScore] = useState(null);
    const [suggestion,setSuggestion] = useState(null);

    return (
        <ScoreContext.Provider value={{ score, setScore, suggestion, setSuggestion }}>
          {children}
        </ScoreContext.Provider>
    );
};