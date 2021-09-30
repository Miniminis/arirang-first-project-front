import React from "react";
import axios from "axios";
import useAsync from "../components/useAsync";
import styled from "styled-components";
import BgQuestion from '../assets/images/bg_question.png';
import Question from "./Question";
import {useTestDispatchContext, useTestStateContext} from "../components/TestContext";
import {Redirect} from "react-router-dom";


async function getQuestions() {
    console.log('api getQuestions called');

    const response = await axios.get(
        'http://localhost:8080/v1/questions'
    );

    return response.data;
}

async function postAnswers(data) {
    console.log('api postAnswers called  ' + data);

    const response = await axios.post(
        'http://localhost:8080/v1/result',
        {
            'test_id' : 1,
            'tester_name' : null,
            'answer_map' : data
        }
    );

    return response.data;
}


function QuestionList() {
    const [state] = useAsync(getQuestions, [], false);
    const { loading, data: questionInfos, error } = state;

    const testState = useTestStateContext();
    const { questionIdx, answers } = testState;
    const dispatch = useTestDispatchContext();

    if (loading) return <div>loading...</div>;
    if (error) return <div>error!</div>;
    if (!questionInfos) return <div>no questions are available</div>;
    if (questionInfos.status_code !== 200) return <div>status_code is not 200</div>

    const questions = questionInfos.data.questions;

    if (questionIdx === questions.length) {
        console.log('3-1 ' + answers.size);

        axios.post(
            'http://localhost:8080/v1/result',
            {
                'test_id' : 1,
                'tester_name' : null,
                'answer_map' : Object.fromEntries(answers)
            })
            .then(function (response) {
                console.log('res');
            })
            .catch(function (error) {
                console.log(error);
            });
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

