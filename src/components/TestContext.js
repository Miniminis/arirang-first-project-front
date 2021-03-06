import React, {createContext, useContext, useReducer} from "react";

const initialState = {
    questionIdx : 0,
    answers : new Map(),
    resultId: 0
}

function reducer (state, action) {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, questionIdx: state.questionIdx + 1 };
        case 'ADD':
            return {...state, answers: state.answers.set(action.answer.key, action.answer.value)};
        case 'RESULT_ID':
            return {...state, resultId : action.resultId};
        case 'INITIALIZE':
            return {...state,
                questionIdx: initialState.questionIdx,
                answers: initialState.answers,
                resultId: initialState.resultId
            };
        default :
            throw new Error(`Unhandled action type! ${action.type}`);
    }
}

const TestStateContext = createContext(initialState);
const TestDispatchContext = createContext(null);


export function TestProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TestStateContext.Provider value={state}>
            <TestDispatchContext.Provider value={dispatch}>
                {children}
            </TestDispatchContext.Provider>
        </TestStateContext.Provider>
    );
}

export function useTestStateContext() {
    const context = useContext(TestStateContext);
    if (!context) {
        throw new Error('Cannot find TestStateContext Provider!');
    }
    return context;
}

export function useTestDispatchContext() {
    const context = useContext(TestDispatchContext);
    if (!context) {
        throw new Error('Cannot find TestDispatchContext Provider!');
    }
    return context;
}