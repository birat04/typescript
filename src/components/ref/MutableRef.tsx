import React from 'react';

export const MutableRef = () => {
    const [count, setCount] = React.useState(0);
    const ref = React.useRef(0);
    React.useEffect(() => {
        ref.current = count;
    }, [count]);
    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <p>Ref count: {ref.current}</p>
        </div>
    );
};