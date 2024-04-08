# 2024.04.08 강의 실습 내용 정리(6주차)
<img src="https://github.com/tealight03/2024React/assets/138011998/32d07079-8956-4334-b9ef-2e5b285235ee" width="700"><br>
-> 이렇게 프로젝트명에 대문자를 넣으면 제대로 실행이 안 된다<br><hr>

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
<b>App.js</b><br>
실제 저장된 데이터의 값은 변동되었지만 컴포넌트가 리렌더링되지 않는 것을 확인 가능<br><hr>

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
실제 저장된 데이터의 값은 변동되었지만 컴포넌트가 리렌더링되지 않는 것을 확인 가능<br><hr>

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
