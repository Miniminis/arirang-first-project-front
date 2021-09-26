import React from "react";
import axios from "axios";
import useAsync from "../components/useAsync";
import styled from "styled-components";
import BgQuestion from '../assets/images/bg_question.png';
import Question from "./Question";
import { useTestDispatchContext, useTestStateContext } from "../components/TestContext";
import {Redirect} from "react-router-dom";


async function getQuestions() {
    console.log('api call');

    const response = await axios.get(
        'http://localhost:8080/v1/questions'
    );
    return response.data;
}


function QuestionList() {
    const [state, refetch] = useAsync(getQuestions);
    const { loading, data: questionInfos, error } = state;

    const testState = useTestStateContext();
    const { questionIdx, answers } = testState;

    if (loading) return <div>loading...</div>;
    if (error) return <div>error!</div>;
    if (!questionInfos) return <div>no questions are available</div>;
    if (questionInfos.status_code !== 200) return <div>status_code is not 200</div>

    const questions = questionInfos.data.questions;

    if (questionIdx === questions.length) {
        return <Redirect to='/result'/>
    }

    return (
        <QuestionListBlock>
            <Question
                key={questions[questionIdx].question_id}
                questionId={questions[questionIdx].question_id}
                questionType={questions[questionIdx].type}
                answers={questions[questionIdx].answers}
            />
        </QuestionListBlock>
    );
}

export default React.memo(QuestionList);


const QuestionListBlock = styled.div`
  width: 100%;
  height: 100vh;
  //outline: none;
  //border: none;
  // background-image: url(${BgQuestion});
  // background-repeat: no-repeat;
`;

