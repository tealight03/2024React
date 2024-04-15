# 2024.04.15 강의 실습 내용 정리(7주차)
<h3><b>Basic useState examples</b><br></h3>
<ul>
  <li>Counter(number)</li>
  <li>Text Field(String)</li>
  <li>CheckBox(boolean)</li>
  <li>Form(two variables)</li>
</ul><br>

<img src="https://github.com/tealight03/2024React/assets/138011998/377c5a80-da95-4dce-a52c-cfd540e78bc2" width="200"><br>

```
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return <button onClick={handleClick}>You pressed me {count} times</button>;
}
```
<b>Counter.js</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

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
<b>index.js</b><hr>

<img src="https://github.com/tealight03/2024React/assets/138011998/47fdeaf0-35ed-47df-933c-51b16639c20a" width="250"><br>

```
import { useState } from "react";

export default function MyInput() {
    const [text, setText] = useState("hello");
    function handleChange(e) {
        setText(e.target.value);
    }
    return (
        <>
            <input value={text} onChange={handleChange} />
            <p>You typed: {text}</p>
            <button onClick={() => setText("hello")}>Reset</button>
        </>
    );
}
```
<b>MyInput.js</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyInput from './MyInput';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyInput />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><hr>

<img src="https://github.com/tealight03/2024React/assets/138011998/4f0d7c00-4309-4fac-877a-8dcddf524e7b" width="170"><br>
<b>checked</b><br>

<img src="https://github.com/tealight03/2024React/assets/138011998/12693f00-94c1-41dc-acfc-f547bd51cfa0" width="240"><br>
<b>unchecked</b><br>

```
import { useState } from "react";

export default function MyCheckbox() {
    const [liked, setLiked] = useState(true);
    function handleChange(e) {
        setLiked(e.target.checked);
    }
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={liked}
                    onChange={handleChange}
                />
                I liked this
            </label>
            <p>You {liked ? "liked" : "did not like"} this.</p>
        </>
    );
}
```
<b>MyCheckBox.js</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyCheckbox from './MyCheckBox';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyCheckbox />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><hr>

<img src="https://github.com/tealight03/2024React/assets/138011998/11d75102-fdd6-4ddb-a9cb-ae73734b4c5a" width="400"><br>

```
import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("Taylor");
    const [age, setAge] = useState(42);
    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setAge(age + 1)}>Increment age</button>
            <p>
                Hello, {name}. You are {age}.
            </p>
        </>
    );
}
```
<b>Form.js</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import reportWebVitals from './reportWebVitals';

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
<b>index.js</b><hr>

# 웹프로그래밍 7주차 과제(04/15)
