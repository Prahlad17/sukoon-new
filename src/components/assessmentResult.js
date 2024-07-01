import React, { useContext } from 'react'
import Header from './header'
import {ScoreContext} from '../components/scoreContext';

const AssessmentResult = () => {
    const {score, suggestion} = useContext(ScoreContext);
    
    // const score = useContext(ScoreContext);
  return (
    <>
    <Header/>
    <div>
        <label>Your Mental Score is: {score}</label>
        <br></br>
        <p>{suggestion}</p>
    </div>

    </>
  )
}

export default AssessmentResult