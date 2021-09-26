import React, {createContext, useContext, useReducer} from "react";

const initialState = {
    questionIdx : 0,
    answers : []
}

function reducer (state, action) {
    switch (action.type) {
        case 'INCREASE':
            return { ...state, questionIdx: state.questionIdx + 1 };
        case 'ADD':
            console.log(state);
            return {...state, answers: state.answers.concat(action.answer)}
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