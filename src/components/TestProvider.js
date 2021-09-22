import React, {useReducer, useRef} from "react";

const initialQuestions = [
    {
        question_id: 1,
        type: 1,
        seq: 1,
        title : '첫번째 질문',
        question : '서울에 있는 빵집의 수를 선택해주세요.(2023년 기준)',
        answers : [
            {
                answer_id: 1,
                seq: 1,
                answer: '7122개'
            },
            {
                answer_id: 2,
                seq: 2,
                answer: '10759개'
            },
            {
                answer_id: 3,
                seq:3,
                answer: '3888개'
            },
            {
                answer_id: 4,
                seq: 4,
                answer: '21978개'
            }
        ]
    },
    {
        question_id: 2,
        type: 1,
        seq: 2,
        title : '두번째 질문',
        question : '서울에서 가장 높은 매출을 올린 빵집을 선택해주세요.(2023년 기준)',
        answers : [
            {
                answer_id: 1,
                seq: 1,
                answer: '김영모 과자점'
            },
            {
                answer_id: 2,
                seq: 2,
                answer: '나폴레옹 과자점'
            },
            {
                answer_id: 3,
                seq:3,
                answer: '밀도'
            },
            {
                answer_id: 4,
                seq: 4,
                answer: '빵의정석'
            }
        ]
    },
    {
        question_id: 3,
        type: 1,
        seq: 3,
        title : '세번째 질문',
        question : '다음 중 서울이 본점인 빵집을 선택해주세요.',
        answers : [
            {
                answer_id: 1,
                seq: 1,
                answer: '옵스'
            },
            {
                answer_id: 2,
                seq: 2,
                answer: '이성당'
            },
            {
                answer_id: 3,
                seq:3,
                answer: '카페 레이어드'
            },
            {
                answer_id: 4,
                seq: 4,
                answer: '삼송빵집'
            }
        ]
    }
];

/*
dispatch
- AddAnswer -> answer[] 답변 추가
    - question_id
    - answer_id
* */

function testReducer (state, action) {
    switch (action.type) {
        case 'ADD':
            return state.concat(action.answer);
        case 'REMOVE' :
            return state.filter(answer => answer.id)
        default :
            throw new Error(`Unhandled action type! ${action.type}`);
    }
}

function TestProvider({ children }) {
    const [state, dispatch] = useReducer(testReducer, initialQuestions);

    return (
        <div>{children}</div>
    );
}

export default TestProvider;