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
state와 props만 사용해서 만든 웹사이트<br><br>

<img src="https://github.com/tealight03/2024React/assets/138011998/f21d2d80-267b-4745-919c-8c1b02e52a11" width="400">
<img src="https://github.com/tealight03/2024React/assets/138011998/ad8343d7-1e48-4792-bde3-e3fd91c03f99" width="410"><br>


```
// page 컴포넌트
import React, { useContext } from "react";
import Content from "./Context";
import Header from "./Header";
import Footer from "./Footer";

const Page = ({ isDark, setIsDark }) => {
    return (
        <div className="page">
            <Header isDark={isDark} />
            <Content isDark={isDark} />
            <Footer isDark={isDark} setIsDark={setIsDark} />
        </div>
    );
};

export default Page;
```
<b>Page.jsx</b><br>

```
import React from "react";

const Header = ({ isDark }) => {
    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? "black" : "lightgray",
                color: isDark ? "white" : "black",
            }}
        >
            <h1>Welcome 홍길동</h1>
        </header>
    );
};

export default Header;
```
<b>Header.jsx</b><br>

```
import React from "react";

const Content = ({ isDark }) => {
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
            }}
        >
            <p>홍길동님, 좋은 하루 되세요 </p>
        </div>
    );
};

export default Content;
```
<b>Content.jsx</b><br>

```
import React from "react";

const Footer = ({ isDark, setIsDark }) => {
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <footer
            className="footer"
            style={{ backgroundColor: isDark ? "black" : "lightgray" }}
        >
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    );
};

export default Footer;
```
<b>Footer.jsx</b><br>

```
// 최상위 컴포넌트
import { useState } from "react";
import "./App.css";
import Page from "./Components/Page";

function App() {
    // 현재 App이 다크모드인지 아닌지 true, false로 정보를 받고 있다.
    const [isDark, setIsDark] = useState(false);
    // Page 자식 컴포넌트에게 해당 데이터를 props로 넘겨 주고 있다.
    return <Page isDark={isDark} setIsDark={setIsDark} />;
}
export default App;
```
<b>App.jsx</b><br>

<h3><b>Counter 예시(2)</b></h3>
Context를 사용해서 만든 웹사이트<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/f21d2d80-267b-4745-919c-8c1b02e52a11" width="400">
<img src="https://github.com/tealight03/2024React/assets/138011998/ad8343d7-1e48-4792-bde3-e3fd91c03f99" width="410"><br>

```
import { createContext } from "react";
// 기본값으로는 null을 넣어준다.
export const ThemeContext = createContext(null);
```
<b>ThemeContext.js</b><br>

```
import React from "react";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

// isDark 를 실질적으로 사용하지 않고, 자녀 컴포넌트들에게 전달하는 역할
// data 필요하지 않음 !
const Page = () => {
    return (
        <div className="page">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default Page;
```
<b>Page.jsx</b><br>

```
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <header
            className="header"
            style={{
                backgroundColor: isDark ? "black" : "lightgray",
                color: isDark ? "white" : "black",
            }}
        >
            <h1>Welcome 홍길동!</h1>
        </header>
    );
};

export default Header;
```
<b>Header.jsx</b><br>

```
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Content = () => {
    // 📌
    const { isDark } = useContext(ThemeContext);
    return (
        <div
            className="content"
            style={{
                backgroundColor: isDark ? "black" : "white",
                color: isDark ? "white" : "black",
            }}
        >
            <p>홍길동님, 좋은 하루 되세요 </p>
        </div>
    );
};

export default Content;
```
<b>Content.jsx</b><br>

```
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
    // 📌
    const { isDark, setIsDark } = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };
    return (
        <footer
            className="footer"
            style={{ backgroundColor: isDark ? "black" : "lightgray" }}
        >
            <button className="button" onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    );
};

export default Footer;
```
<b>Footer.jsx</b><br>

```
import { useState } from "react";
import "./App.css";
import Page from "./Components/Page";
import { ThemeContext } from "./context/ThemeContext";

function App() {
    const [isDark, setIsDark] = useState(false);
    return (
        // 📌
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <Page />
        </ThemeContext.Provider>
    );
}

export default App;
```
<b>App.js</b><br>

<h3><b>useRef 예시(1)</b></h3>
 useRef 사용 예시 - 변수 관리<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/fac3bacf-c735-4753-ba47-29fa044f0b6a" width="300"><br>

```
import { useState, useRef } from "react";
// import "./styles.css";

function App() {
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);
    let varCount = 0;
    function upState() {
        setStateCount(stateCount + 1);
        console.log("stateCount : ", stateCount);
    }
    function upRef() {
        ++refCount.current;
        console.log("refCount : ", refCount.current);
    }
    function upVar() {
        ++varCount;
        console.log("varCount : ", varCount);
    }
    return (
        <div>
            <div>stateCount : {stateCount} </div>
            <div>refCount : {refCount.current} </div>
            <div>varCount : {varCount} </div>
            <br />
            <button onClick={upState}>state up</button>
            <button onClick={upRef}>ref up</button>
            <button onClick={upVar}>var up</button>
        </div>
    );
}

export default App;
```
<b>App.js</b><br>

<h3><b>useRef 예시(2)</b></h3>
useRef 사용 예시 - DOM 요소 선택<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/455f6286-3c5f-4ac5-8259-018e0dc755f7" width="300"><br>

```
import { useRef, useEffect } from "react";
// import "./styles.css";

function DOMFocus() {
    const inputRef = useRef();
    function focus() {
        inputRef.current.focus();
        console.log(inputRef.current);
    }
    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="아이디 또는 이메일"
            />
            <button>Login</button>
            <br />
            <button onClick={focus}>focus</button>
        </div>
    );
}

export default DOMFocus;
```
<b>DOMFocus.jsx</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import DOMFocus from './DOMFocus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DOMFocus />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>useRef 예시(3)</b></h3>
useRef 사용 예시 - DOM 요소 선택<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/18817a16-01a3-45c1-9366-a0b7b08487d3" width="400"><br>

```
import React, { useState, useRef } from "react";

const InputSample = () => {
    const [inputs, setInputs] = useState({
        이름: "",
        nickname: "",
    });
    const nameFocus = useRef();
    const { 이름, nickname } = inputs;
    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const onReset = () => {
        setInputs({
            이름: "",
            nickname: "",
        });
        nameFocus.current.focus();
    };
    return (
        <div>
            <input
                name="이름"
                placeholder="이름쓰세요"
                onChange={onChange}
                value={이름}
                ref={nameFocus}
            />
            <input
                name="nickname"
                placeholder="닉네임쓰세요"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {이름}({nickname})
            </div>
        </div>
    );
};

export default InputSample;
```
<b>InputSample.jsx</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import InputSample from './InputSample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <InputSample />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3>useImperativeHandle</b></h3>
부모 컴포넌트에게 커스텀 함수 노출하기(1)<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/d96453b1-e3bb-4e5b-ad3e-1ac4d96ef611" width="250"><br>

```
import { useImperativeHandle } from "react";

function ChildComponent(props, ref) {
    useImperativeHandle(
        ref,
        () => {
            return {
                getText: () => "useImperativeHandle 테스트",
            };
        },
        []
    );
    return <span>children ref 테스트</span>;
}

export default ChildComponent;
```
<b>ChildComponent.jsx</b><br>

```
import { useEffect, useRef, forwardRef } from "react";
import ChildComponent from "./ChildComponent";

const ForwardedChild = forwardRef(ChildComponent);
function ParentComponent() {
    const childRef = useRef(null);
    useEffect(() => {
        console.log(childRef.current?.getText()); // 'useImperativeHandle 테스트'
    }, []);
    return (
        <div>
            <ForwardedChild ref={childRef} />
        </div>
    );
}

export default ParentComponent;
```
<b>ParentComponent.jsx</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import ParentComponent from './ParentComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ParentComponent />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3>useImperativeHandle</b></h3>
부모 컴포넌트에게 커스텀 함수 노출하기(2)<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/2c54c645-53c0-4482-99bc-387a2e13ab06" width="400"><br>

```
import { useRef, useImperativeHandle } from "react";

function MyInput(props, ref) {
    const inputRef = useRef(null);
    useImperativeHandle(
        ref,
        () => {
            return {
                focus() {
                    inputRef.current.focus();
                },
            };
        },
        []
    );
    return <input type="text" ref={inputRef} />;
}

export default MyInput;
```
<b>MyInput.jsx</b><br>

```
import { useRef, forwardRef } from "react";
import MyInput from "./MyInput";

const ForwardedMyInput = forwardRef(MyInput);
function Form() {
    const ref = useRef(null);
    function handleClick() {
        // useImperativeHandle에서 focus만 노출시키고 있다.
        // ref.current에서 input 관련 다른 변수나 함수 접근 시도 시 에러 발생한다.
        ref.current.focus();
    }
    return (
        <form>
            <ForwardedMyInput ref={ref} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    );
}

export default Form;
```
<b>Form.jsx</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Form />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3>useImperativeHandle</b></h3>
부모 컴포넌트에게 커스텀 함수 노출하기(2)<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/2c54c645-53c0-4482-99bc-387a2e13ab06" width="400"><br>

<b>index.js</b><br>

<h3>useEffect</b></h3>
사용법(1) - 무한반복<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/0eb80950-9f91-431e-bfb6-8498bb2036a5" width="150"><br>

```
import { useEffect, useState } from "react";

export default function UseEffectTest() {
    const [count, setCounter] = useState(0);
    useEffect(() => {
        console.log(`useEffect: ${Date()}`);
    });
    const countHandler = (e) => {
        setCounter((s) => s + 1);
    };
    return (
        <div className="App">
            <h1 id="hi">{count}</h1>
            <button onClick={countHandler}>카운터 증가</button>
        </div>
    );
}
```
<b>UseEffectTest.jsx</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import UseEffectTest from './UseEffectTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UseEffectTest />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3>useEffect</b></h3>
사용법(2) - 처음에만 실행<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/0eb80950-9f91-431e-bfb6-8498bb2036a5" width="150"><br>

```
import { useState, useEffect } from "react";

export default function App() {
    const [count, setCounter] = useState(0);
    useEffect(() => {
        console.log(`useEffect: ${Date()}`);
    }, []);
    const countHandler = (e) => {
        setCounter((s) => s + 1);
    };
    return (
        <div className="App">
            <h1 id="hi">{count}</h1>
            <button onClick={countHandler}>카운터 증가</button>
        </div>
    );
}
```
<b>App.js</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3>useEffect</b></h3>
사용법(3) - 의존성 배열 사용<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/0d629608-de2b-4a92-a086-2caa87ad0e70" width="150"><br>

```
import { useEffect, useState } from "react";

export default function UseEffectTest() {
    const [firstCount, setFirstCounter] = useState(0);
    const [secondCount, setSecondCounter] = useState(0);
    useEffect(() => {
        console.log(`useEffect: ${Date()}`);
    }, [firstCount]);
    const firstCountHandler = (e) => {
        setFirstCounter((s) => s + 1);
    };
    const secondCountHandler = (e) => {
        setSecondCounter((s) => s + 1);
    };
    return (
        <div className="App">
            <h1>{firstCount}</h1>
            <button onClick={firstCountHandler}>카운터 증가</button>
            <h1 id="hi">{secondCount}</h1>
            <button onClick={secondCountHandler}>카운터 증가</button>
        </div>
    );
}
```
<b>UseEffectTest.jsx</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import UseEffectTest from './UseEffectTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UseEffectTest/>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3>useLayoutEffect</b></h3>
사용법(3) - 의존성 배열 사용<br>

<img src="https://github.com/tealight03/2024React/assets/138011998/46015f2a-711c-4144-8ef1-97fbc341d738" width="450"><br>

```
import { useEffect, useState } from "react";
export default function App() {
    const [age, setAge] = useState(0);
    const [name, setName] = useState("");
    useEffect(() => {
        setAge(25);
        setName("찬민");
    }, []);
    return (
        <>
            <div className="App">{`그의 이름은 ${name} 이며, 
나이는 ${age}살 입니다.`}</div>
        </>
    );
}
```
<b>UseEffectTest.jsx(useEffect를 사용하였을 때)</b><br>

```
import { useLayoutEffect, useState } from "react";

export default function App() {
    const [age, setAge] = useState(0);
    const [name, setName] = useState("");
    useLayoutEffect(() => {
        setAge(25);
        setName("찬민");
    }, []);
    return (
        <>
            <div className="App">{`그의 이름은 ${name} 이며, 
나이는 ${age}살 입니다.`}</div>
        </>
    );
}
```
<b>UseEffectTest.jsx(useLayoutEffect를 사용하였을 때)</b><hr>

<b>useLayoutEffect로 웹사이트 만들고, 새로고침 시 깜빡임 확인하기</b><br><br>
<img src="https://github.com/tealight03/2024React/assets/138011998/dda05e74-916e-4fff-9472-65f2f8cc1396" width="200"><br>

```
import { useEffect, useState } from "react";

const Practice = () => {
    const [logoUrl, setLogoUrl] = useState("");

    useEffect(() => {
        setLogoUrl('logo192.png');
    }, []);

    return (
        <>
            <img alt='test' src={logoUrl} />
        </>
    );
};

export default Practice;
```
<b>Practice.jsx</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';

//import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Practice from './Practice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Practice/>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>
