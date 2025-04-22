import { useReducer } from "react";
type CounterState = {
    count : number
}
type UpdateAction = {
    type: "increment" | "decrement" | "reset"
    payload: number
}
type ResetAction = {
    type: "reset"
}
type CounterAction = UpdateAction | ResetAction

const initialState = {
    count: 0
};

const reducer = (state: CounterState, action: CounterAction) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initialState;
        default:
            return state;
    }
};

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <div className="p-4">
            <p className="mb-2 text-lg">Count: {state.count}</p>
            <div className="flex gap-2">
                <button 
                    className="px-3 py-1 bg-blue-500 text-white rounded" 
                    onClick={() => dispatch({type: 'increment', payload: 10})}>
                    Increment 10
                </button>
                <button 
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => dispatch({type: 'decrement', payload: 10})}>
                    Decrement 10
                </button>
                <button 
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => dispatch({type: 'reset', payload: 10})}>
                    Reset
                </button>
            </div>
        </div>
    );
}