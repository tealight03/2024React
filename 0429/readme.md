# 2024.04.29 강의 실습 내용 정리(9주차)
<h3><b>Counter.js 예제(1)</b></h3>
init 함수를 사용하지 않는 counter 예시<br><br>

<img src="https://github.com/tealight03/2024React/assets/138011998/bf875d5e-ede7-451a-b978-935a699effb7" width="170"><br>


```
import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.payload };
        case "DECREMENT":
            return { count: state.count - action.payload };
        default:
            throw new Error("unsupported action type: ", action.type);
    }
}

const Counter = () => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
                증가
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
                감소
            </button>
            <button onClick={() => dispatch({ type: "kkkkkkkkk", payload: 1 })}>
                에러
            </button>
        </>
    );
};
export default Counter;
```
<b>Counter.js</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>Counter.js 예제(2)</b></h3>
init 함수를 사용하는 counter 예시<br><br>

<img src="https://github.com/tealight03/2024React/assets/138011998/688099f5-9e6f-415f-9743-fe04fba0611b" width="200"><br>


```
import React, { useReducer } from "react";

function init(initialState) {
    //return { count: initialState };
    return { count: 0 };
}
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + action.payload };
        case "DECREMENT":
            return { count: state.count - action.payload };
        case "RESET":
            return init(action.payload);
        default:
            throw new Error("unsupported action type: ", action.type);
    }
}

const Counter = ({ initialCount }) => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "RESET", payload: 0 })}>
                초기화
            </button>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>
                증가
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>
                감소
            </button>
            <button onClick={() => dispatch({ type: "kkkkkkkkk", payload: 1 })}>
                에러
            </button>
        </>
    );
};
export default Counter;
```
<b>Counter.js</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>Counter.js 예제(3)</b></h3>
useState 사용<br><br>

<img src="https://github.com/tealight03/2024React/assets/138011998/77c149e0-c637-46c3-b960-eaa91b0f597d" width="200"><br>


```
import React, { useState } from "react";

const Counter = ({ initialCount }) => {
    const initial = initialCount ? initialCount : 0;
    const [count, setCount] = useState(initial);
    const onIncrease = () => {
        setCount((count) => count + 1);
    };
    const onDecrease = () => {
        setCount((count) => count - 1);
    };
    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(initial)}>초기화</button>
            <button onClick={onIncrease}>증가</button>
            <button onClick={onDecrease}>감소</button>
        </>
    );
};
export default Counter;
```
<b>Counter.js</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>
<hr>

<h3><b>Counter 예시(1)</b></h3>

<b>App.jsx</b><br>

<b>index.js</b><br>

<h3><b>Counter 예시(2)</b></h3>

<b>App.jsx</b><br>

<b>index.js</b><br>
