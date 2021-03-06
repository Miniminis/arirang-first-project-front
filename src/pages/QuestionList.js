import React from "react";
import axios from "axios";
import useAsync from "../components/useAsync";
import styled from "styled-components";
import BgQuestion from '../assets/images/bg_question.png';
import Question from "./Question";
import {useTestDispatchContext, useTestStateContext} from "../components/TestContext";
import {Redirect} from "react-router-dom";
import ErrorPage from "../components/ErrorPage";


async function getQuestions() {
    const response = await axios.get(
        'https://api-arirang.docking.zone/v1/questions'
    );

    return response.data;
}


async function postAnswers(data) {
    const response = await axios.post(
        'https://api-arirang.docking.zone/v1/result',
        {
            'test_id' : 1,
            'tester_name' : null,
            'answer_map' : data
        }
    );

    return await response.data;
}




function QuestionList() {
    const [state] = useAsync(getQuestions, [], false);
    const { loading, data: questionInfos, error } = state;

    const testState = useTestStateContext();
    const { questionIdx, answers } = testState;

    const dispatch = useTestDispatchContext();


    if (loading) return <div>loading...</div>;
    if (error) return <ErrorPage/>;
    if (!questionInfos) return <div>no questions are available</div>;
    if (questionInfos.status_code !== 200) return <div>status_code is not 200</div>

    const questions = questionInfos.data.questions;

    if (questionIdx === questions.length) {

        postAnswers(Object.fromEntries(answers))
            .then(r => {
                const result_id = r.data.result_id;
                dispatch({ type: 'RESULT_ID', resultId : result_id });
            });

        return <Redirect to={{ pathname: '/result' }}/>
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
  // outline: none;
  // border: none;
  //  background-image: url(${BgQuestion});
  //  background-repeat: no-repeat;
`;

