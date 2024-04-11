# 2024.04.08 강의 실습 내용 정리(6주차)
<h3><b>※ 주의사항</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/32d07079-8956-4334-b9ef-2e5b285235ee" width="700"><br>
이렇게 프로젝트명에 대문자를 넣으면 제대로 실행이 안 된다<br><hr>

<h3><b>이미지와 텍스트를 출력하는 컴포넌트 만들기</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/2ea4d210-2da1-4cce-bb19-0ad34d26e6fb" width="600"><br>

```
import React from "react";

export default function FPhotoText(props) {
    const url = "img/" + props.image + ".png";
    const label = props.label;
    const boxStyle = {
        border: "1px solid silver",
        margin: "8px",
        padding: "4px",
    };

    return (
        <div style={boxStyle}>
            <img src={url} width="128" alt="Desktop computer"/>
            <span>{label}</span>
        </div>
    );
}
```
<b>FPhotoText.js</b><br>

```
import './App.css';
import FPhotoText from './FPhotoText';

function App() {
  return (
    <div>
      <FPhotoText image="desktop" label="Desktop" />
      <FPhotoText image="notebook" label="Notebook" />
      <FPhotoText image="pad" label="Pad" />
    </div>
  );
}

export default App;
```
<b>App.js</b><br><hr>

<h3><b>state를 사용하지 않은 경우</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/b0f59740-d956-4f36-9193-7612dd25c743" width="900"><br>

```
import React from "react";
const Counter = () => {
    let count = 0;
    const plus = () => {
        count = count + 1;
        console.log(count); // 제대로 증가함
    };
    const minus = () => {
        count = count - 1;
        console.log(count); // 제대로 감소함
    };
    return (
        <div className="container" style={{ margin: 15 }}>
            <h2 className="int">{count}</h2>
            <button className="plus" onClick={plus}>
                +
            </button>
            <button className="minus" onClick={minus}>
                -
            </button>
        </div>
    );
};
export default Counter;
```
<b>Counter.js</b><br>

```
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```
<b>App.js</b><br>
실제 저장된 데이터의 값은 변동되었지만 컴포넌트가 리렌더링되지 않는 것을 확인 가능<br><br>

<h3><b>state를 사용하지 않은 경우</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/4be2a9a1-d16e-47af-9782-a064e7889eb2" width="900"><br>

```
import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    console.log(count);
    const plus = () => {
        setCount(count + 1);
    };
    const minus = () => {
        setCount(count - 1);
    };
    return (
        <div className="container">
            <h2 className="int">{count}</h2>
            <button className="plus" onClick={plus}>
                +
            </button>
            <button className="minus" onClick={minus}>
                -
            </button>
        </div>
    );
};
export default Counter;
```
<b>수정된 Counter.js</b><br>
이제 state를 이용하여 state가 변경되었을 때 올바르게 화면이 리렌더링되는 것을 확인할 수 있다<br><hr>

<h3><b>비동기 방식으로 동작하는 setState에 대해 올바른 처리가 되지 않은 경우</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/efd4ab30-dbe8-4eb7-b9d9-d840b98f93e7" width="750"><br>

```
import React from 'react';

function Counter2(props) {
    const [number, setNumber] = useState(0)
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(number + 1);
                console.log(number)
                setNumber(number + 2);
                console.log(number)
                setNumber(number + 3);
                console.log(number)
            }}>+3</button>
        </div>
    )
}

export default Counter2;
```
<b>Counter2.js</b><br>
이 경우, setState가 비동기적으로 동작하기 때문에 1+2+3의 결과 6이 아니라 3이라는 값이 화면상에 렌더링된다<br><br>

<h3><b>비동기 방식으로 동작하는 setState에 대해 올바른 처리가 되지 않은 경우</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/59bff4aa-ba80-415c-9e71-31bff388225a" width="750"><br>

```
import React from 'react';

function Counter2(props) {
    const [number, setNumber] = useState(0)
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(number => number + 1);
                console.log(number)
                setNumber(number => number + 2);
                console.log(number)
                setNumber(number => number + 3);
                console.log(number)
            }}>+3</button>
        </div>
    )
}

export default Counter2;
```
<b>수정된 Counter2.js</b><br>
이렇게 콜백 함수를 사용하면 항상 최신의 값을 인자로 받아와서 처리하기 때문에<br>
항상 최신값을 받아서 렌더링을 처리할 수 있다<br><hr>

<h3>+) <b>state 추가 예제</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/c13b5f81-fee0-4e89-ad99-84d09f3eed25" width="150">

```
import React, { Component } from 'react'

export default class Member extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '홍길동',
            age: 300,
            job: '개발'
        }
    }
    render() {
        const {name, age, job} = this.state
        return (
            <div>
                <div>name : {name}</div>
                <div>age : {age}</div>
                <div>job : {job}</div>
            </div>
        )
    }
}
```
<b>Member.js</b><br>

```
import './App.css';
import Member from './Member';
function App() {
    return (
        <div>
            <Member />
        </div>
    );
}
export default App;
```
<b>Member.js</b><br>
이렇게 State를 설정해서 사용할 수 있다<br><hr>

# 웹프로그래밍 6주차 과제(04/08)
<h3><b>과제 설명</b></h3>
아래의 조건들을 만족하는 웹사이트 구축하기<br><br>
<ul>
    <li>총 5개 이상의 컴포넌트로 구성</li>
    <li>2개 이상의 props를 전달하는 컴포넌트 1개 이상 포함</li>
    <li>2개 이상의 state를 가진 컴포넌트 1개 이상 포함</li>
    <li>1개 이상의 props와 state를 가진 컴포넌트 1개 이상 포함</li>
    <li>회원가입 페이지 포함</li>
</ul>
