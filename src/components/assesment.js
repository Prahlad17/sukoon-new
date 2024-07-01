import React,{useState,createContext,useContext} from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {UserContext} from './userContext';
import axios from 'axios';
export const ScoreContext = createContext();


const Assesment = () => {
  const userId = useContext(UserContext);
  const [clickedCircles, setClickedCircles] = useState({});
  // const [clicked,setClicked] = useState(false);
  const navigate = useNavigate();
  const [responses, setResponses] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null
  });

  const weights = {
    q1: 1,
    q2: 3,
    q3: 3,
    q4: 1,
    q5: 2,
    q6: 1,
    q7: 1,
    q8: 3
  };

  const CalculateFinalScore = (responses,weights) =>{
    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0);
    const weightedSum = Object.keys(responses).reduce((sum, key) => {
      console.log(sum);
    return sum + (responses[key] * weights[key]);
    
    }, 0);

    const maxScore = 5 * totalWeight;
    const minScore = 1 * totalWeight;
    let normalizedScore = ((weightedSum - maxScore)/(maxScore-minScore)) * 100;
    if(normalizedScore<0){
      normalizedScore*=-1;
    }
    let status, suggestion;

  if (normalizedScore >= 80) {
    status = "Excellent";
    suggestion = "Keep up the good work! Maintain your positive habits.";
  } else if (normalizedScore >= 60) {
    status = "Good";
    suggestion = "You are doing well. Continue to focus on your mental well-being.";
  } else if (normalizedScore >= 40) {
    status = "Average";
    suggestion = "It's important to take some time for self-care and relaxation.";
  } else {
    status = "Below Average";
    suggestion = "Consider seeking professional help or talking to someone you trust.";
  }
  return {normalizedScore,suggestion};
  console.log(normalizedScore);
  console.log(maxScore);
  console.log(status);
  console.log(suggestion);
  }

  const handleClick = (question, value) => (e) => {
    e.preventDefault();
    setResponses(prevState => ({
      ...prevState,
      [question]: value
    }));
    setClickedCircles(prevState => ({
      ...prevState,
      [`${question}-${value}`]: !prevState[`${question}-${value}`]
    }));
  
  };

  const renderQuestion = (questionKey, questionText) => (
    <div key={questionKey}>
      <Questions>{questionText}</Questions>
      <ValueCont>
        {[1, 2, 3, 4, 5].map(num => (
          <Circle
            key={`${questionKey}-${num}`}
            onClick={handleClick(questionKey, num)}
            clicked={clickedCircles[`${questionKey}-${num}`]}
          >
            {num}
          </Circle>
        ))}
      </ValueCont>
      <p>1 being Not at all, 5 being Nearly every day</p>
    </div>
  );

  const submitAssessment = async (score,suggestion) =>{
    console.log("12345678");
    try{
    // const userId = localStorage.getItem('userId');

    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
  //   console.log(userName);
  //   if (!userName) {
  //     console.error('No userId found in localStorage');
  //     return;
  // }
  
  console.log('Submitting assessment with userId:', userName);
    const response = await axios.post('http://localhost:3001/assessments/create',{
      userId: userEmail,
      userName: userName,
      normalizedScore: score,
      textSuggestion: suggestion
    });
    console.log(response.data);
    if(response.status ===200){
      console.log('Assessment submitted successfully');
      navigate('/assessmentResult')
    }
    else{
      console.error('Error submitting assessment:',response.data);
    }
  } catch(error){
    console.error('Error sending assessment:',error);
  }
};

  const navigateToResult = async (e) => {
    e.preventDefault();
    const {normalizedScore,suggestion }= CalculateFinalScore(responses,weights);
    console.log(normalizedScore + " " +suggestion);
    submitAssessment(normalizedScore,suggestion);
    // navigate('/assessmentResult',{normalizedScore,suggestion});
    //
    
    //
    // axios.post('http://localhost:3001/assessments/create',{userId,normalizedScore,suggestion})
    // .then((result=>{
    //   console.log(result);
    //   if(result.data ==)

    // }))
    // const {normalizedScore,suggestion }= CalculateFinalScore(responses,weights);
    // try{
    //   await createAssessment(userId,normalizedScore,suggestion);
    //   navigate('/assessmentResults',{state: {score: normalizedScore}});
    // } catch(error){
    //   console.log("Error saving assessment:",error);
    // }
    // navigate('/assessmentResults',{state: {score: normalizedScore}});
    // <ScoreContext.Provider value={normalizedScore1}></ScoreContext.Provider>
    // navigate('/assessmentResults');
    // console.log('Responses:', responses);
    // Submit the responses to the backend or handle them as needed
  };
  return (
    <>
    
    <AssessCont>
      <HeadLine>Over the last 2 weeks, how often have you been
      bothered by any of the following problems?</HeadLine>
      <QuestCont>
        <form id='form' type="get">
          {renderQuestion('q1', 'Little interest or pleasure in doing things')}
          {renderQuestion('q2', 'Feeling down, depressed, or hopeless')}
          {renderQuestion('q3', 'Trouble falling or staying asleep, or sleeping too much')}
          {renderQuestion('q4', 'Feeling tired or having little energy')}
          {renderQuestion('q5', 'Poor appetite or overeating')}
          {renderQuestion('q6', 'Feeling bad about yourself or that you are a failure or have let yourself or your family down')}
          {renderQuestion('q7', 'Trouble concentrating on things, such as reading the newspaper or watching television')}
          {renderQuestion('q8','Thoughts that you would be better off dead, or of hurting yourself')}
          <button onClick={navigateToResult} background-color='gray'>Submit</button>
        </form>
      </QuestCont>
    </AssessCont>
    
    </>
  )
}

export default Assesment;

const AssessCont = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 2%;
  margin-top: 5px;
  margin-left: 2px;
  height: 1550px;
  ${'' /* padding-bottom: 2px; */}
  ${'' /* flex-grow: 1; */}
  ${'' /* padding: 20px; */}
  background-color: #fff;
  ${'' /* box-sizing: border-box; */}
`;

const QuestCont = styled.div`
  padding-left: 100px;
`;

const HeadLine = styled.h2`
  font-size: 30px;
`;

const Questions = styled.h4`
  font-size: 20px;
`;

const ValueCont = styled.div`
  display: flex;

`;

const Circle = styled.button`
    width: 50px;
    height: 50px;
    background-color:${props => props.clicked ? 'green' : 'orange'} ;
    color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    border: 2px solid black;
    margin-right: 8px;
    cursor: pointer;
    transition: none;
`;



