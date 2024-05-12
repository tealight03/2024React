import React, { useEffect, useState } from 'react';

const TextView = ({ text }) => {
    useEffect(() => {
        console.log('text 변경됨');
    });
    return <div>{text}</div>;
};

const CountView = ({ count }) => {
    useEffect(() => {
        console.log('count가 변경됨');
    });
    return <div>{count}</div>;
};

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('a');

    return (
        <div className="App">
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <br />
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>count 1 증가</button>
        </div>
    );
}

export default App;

