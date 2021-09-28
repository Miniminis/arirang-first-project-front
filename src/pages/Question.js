import React, {useState} from "react";
import styled from "styled-components";
import Question1 from "../assets/images/question_1.png";
import Question2 from "../assets/images/question_2.png";
import Question3 from "../assets/images/question_3.png";
import Question4 from "../assets/images/question_4.png";
import Question5 from "../assets/images/question_5.png";
import Question6 from "../assets/images/question_6.png";
import Question7 from "../assets/images/question_7.png";
import Question8 from "../assets/images/question_8.png";
import Question9 from "../assets/images/question_9.png";
import Question10 from "../assets/images/question_10.png";
import Question11 from "../assets/images/question_11.png";
import Question12 from "../assets/images/question_12.png";
import Title1 from "../assets/images/title_1.png";
import Title2 from "../assets/images/title_2.png";
import Title3 from "../assets/images/title_3.png";
import Title4 from "../assets/images/title_4.png";
import Title5 from "../assets/images/title_5.png";
import Title6 from "../assets/images/title_6.png";
import Title7 from "../assets/images/title_7.png";
import Title8 from "../assets/images/title_8.png";
import Title9 from "../assets/images/title_9.png";
import Title10 from "../assets/images/title_10.png";
import Title11 from "../assets/images/title_11.png";
import Title12 from "../assets/images/title_12.png";
import BgQuestion from "../assets/images/bg_question.png";
import {useTestStateContext, useTestDispatchContext} from "../components/TestContext";

function Question({ questionId, questionType, answers }) {
    const questionTitles = getQuestionTitles();
    const questionImgs = getQuestionImgs();

    const testState = useTestStateContext();
    const { questionIdx, testAnswers } = testState;
    const dispatch = useTestDispatchContext();

    const onClick = (e) => {
        dispatch({ type: 'ADD', answer: { key : questionId, value: e.target.value } })
        dispatch({ type: 'INCREASE' });
    }

    return (
        <QuestionBlock>
            <QuestionTitle key={'t_' + questionIdx} src={questionTitles[questionIdx]}/>
            <QuestionImage key={'q_' + questionIdx} src={questionImgs[questionIdx]}/>
            {answers.map(answer => (
                <AnswerButton
                    key={answer.seq}
                    onClick={onClick}
                    value={answer.answer}>
                    {answer.seq}. {answer.answer}
                </AnswerButton>
            ))}
        </QuestionBlock>
    );
}

const QuestionBlock = styled.div`
  width: 100%;
  height: 100vh;
  //outline: none;
  //border: none;
  // background-image: url(${BgQuestion});
  // background-repeat: no-repeat;
`;

const QuestionTitle = styled.img.attrs(props => ({
    src: props.src
}))``;


const QuestionImage = styled.img.attrs(props => ({
    src: props.src
}))`
  margin-bottom: 1rem;
`;


function getQuestionImgs() {
    return [Question1, Question2, Question3, Question4, Question5, Question6,
        Question7, Question8, Question9, Question10, Question11, Question12];
}

function getQuestionTitles() {
    return [Title1, Title2, Title3, Title4, Title5, Title6, Title7,
        Title8, Title9, Title10, Title11, Title12];
}

const AnswerButton = styled.button`
  border: none;
  outline: none;
  border-radius: 32px;
  cursor: pointer;
  
  display: block;
  width: 280px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin: 0 auto;
  & + & {
    margin-top: 1rem;
  };

  background: white;
  color: #7c572a;
  font-size: 20px;
`;

export default Question;