import React,{useState} from 'react'
import styled from 'styled-components';


const Assesment = () => {
  
  const [clickedCircles, setClickedCircles] = useState({});

  const handleClick = (key) => () => {
    console.log(key);
    setClickedCircles(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const navigateToResult = () =>{
    console.log(clickedCircles);
  } 
  return (
    <AssessCont>
      <HeadLine>Over the last 2 weeks, how often have you been
      bothered by any of the following problems?</HeadLine>
      <QuestCont>
        <form id='form'>
        <div>
          <Questions>Little interest or pleasure in doing things</Questions>
          <ValueCont>
            {[1,2, 3, 4, 5].map(num => (
             <Circle key={num} clicked={clickedCircles[num]} onClick={handleClick(num)}>
                {num}
             </Circle>
            ))}
          </ValueCont>
          <p>1 being Not at all, 5 being Nearly every day</p>

        </div>
        <div>
        <Questions>Feeling down, depressed, or hopeless</Questions>
        <ValueCont>
        {[1,2, 3, 4, 5].map(num => (
             <Circle key={num} clicked={clickedCircles[num]} onClick={handleClick(num)}>
                {num}
             </Circle>
            ))}
          </ValueCont>
        </div>
        <div>
        <Questions>Trouble falling or staying asleep, or sleeping too much</Questions>
        <ValueCont>
        {[1,2, 3, 4, 5].map(num => (
             <Circle key={num} clicked={clickedCircles[num]} onClick={handleClick(num)}>
                {num}
             </Circle>
            ))}
          </ValueCont>
        </div>
        <div>
        <Questions>Feeling tired or having little energy</Questions>
        <ValueCont>
        {[1,2, 3, 4, 5].map(num => (
             <Circle key={num} clicked={clickedCircles[num]} onClick={handleClick(num)}>
                {num}
             </Circle>
            ))}
          </ValueCont>
        </div>
        <div>
        <Questions>Poor appetite or overeating</Questions>
        <ValueCont>
        {[1,2, 3, 4, 5].map(num => (
             <Circle key={num} clicked={clickedCircles[num]} onClick={handleClick(num)}>
                {num}
             </Circle>
            ))}
          </ValueCont>
        </div>
        <button onClick={navigateToResult}>Submit</button>
        </form>
      </QuestCont>
    </AssessCont>
  )
}

export default Assesment;

const AssessCont = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 2%;
  margin-top: 5px;
  margin-left: 20%;
  padding-bottom: 2px;
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
    background-color: ${props => props.clicked ? 'green' : 'orange'};
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
`;



