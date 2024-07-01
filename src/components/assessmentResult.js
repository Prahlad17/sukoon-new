import React, { useContext } from 'react'
import Header from './header'
// import {ScoreContext} from '../components/assesment';

const AssessmentResult = ({normalizedScore,suggestion}) => {
    console.log(normalizedScore+" "+suggestion);
    // const score = useContext(ScoreContext);
  return (
    <>
    <Header/>
    <div>
        <label>Your Mental Score is: {normalizedScore}</label>
        <br></br>
        <p>{suggestion}</p>
    </div>

    </>
  )
}

export default AssessmentResult