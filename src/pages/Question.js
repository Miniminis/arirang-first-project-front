import React from "react";
import styled from "styled-components";
import QuestionImg from '../assets/images/home-map.jpg';


const QuestionBlock = styled.div`
  text-align: center;
  padding-top: 5rem;
`;

const QuestionTitle = styled.text`
  display: block;
  color: black;
  font-size: 36px;
`;

const QuestionImage = styled.div`
    width: 100%;
`;

const AnswerInput = styled.input``;

const AnswerButton = styled.button`
  display: block;
  outline: none;
  border: none;
  border-radius: 18px;
  
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
  
  font-size: 24px;
  & + & {
    margin-top: 1rem;
  }
`;

const NextButton = styled.button``;


function Question() {

    return (
        <QuestionBlock>
            <QuestionTitle>첫번째 질문</QuestionTitle>
            <QuestionImage ><image src={QuestionImg}/></QuestionImage>
            <AnswerButton>7122개</AnswerButton>
            <AnswerButton>7122개</AnswerButton>
            <AnswerButton>7122개</AnswerButton>
            <AnswerButton>7122개</AnswerButton>
        </QuestionBlock>
    );
}

export default Question;