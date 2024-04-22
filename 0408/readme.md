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
<b>FPhotoText.js</b>x<br>

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
<b>Counter.jsx</b><br>

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
<b>수정된 Counter.jsx</b><br>
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
<b>Counter2.jsx</b><br>
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
<b>수정된 Counter2.jsx</b><br>
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
<b>Member.jsx</b><br>

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
<b>Member.jsx</b><br>
이렇게 State를 설정해서 사용할 수 있다<br><hr>

<h3><b>State 설정 및 사용</b></h3>

<img src="https://github.com/tealight03/2024React/assets/138011998/01d30762-b4c5-4e56-9f8f-468504a99866" width="250"><br>

```
import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        // state 초기값 설정
        this.state = {
            count: 0,
        };
    }
    
    render() {
        const { count } = this.state;
        return (
            <div>
                <h2>현재 Count : {count}</h2>
                <button
                    onClick={() => {
                        this.setState({ count: count + 1 });
                    }}
                >카운트 +1</button>
            </div>
        );
    }
}

export default Counter;
```
<b>Counter.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./Form";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
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

<h3><b>리액트의 이벤트 문법</b></h3>

- JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러 전달<br><br>
<ul>
    <li>
        <img src="https://github.com/tealight03/2024React/assets/138011998/117103fb-25c5-47de-8d9a-793f2892942b" width="300"><br><br>
    </li>
    <li>
        <img src="https://github.com/tealight03/2024React/assets/138011998/4a5e40b3-8000-41fc-8415-0c382fd0584b" width="300"><br>
    </li>
</ul>

```
import React, { useState } from "react";

const Main = () => {
    const [myName, setMyName] = useState("홍길동");
    function changeName() {
        setMyName(myName === "홍길동" ? "김길동" : "홍길동");
    }
    return (
        <div>
            <h1>안녕하세요. {myName} 입니다.</h1>
            <button onClick={changeName}>Change</button>
        </div>
    );
};
export default Main;
```
<b>Main.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main.jsx"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

- 함수를 직접 선언하여 사용<br><br>

```
import React, { useState } from "react";

const Main = () => {
    const [myName, setMyName] = useState("홍길동");
    return (
        <div>
            <h1>안녕하세요. {myName} 입니다.</h1>
            <button
                onClick={() => {
                    setMyName(myName === "홍길동" ? "김길동" : "홍길동");
                }}
            >
                Change
            </button>
        </div>
    );
};
export default Main;
```
<b>Main.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main.jsx"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>State 설정 및 사용</b></h3>

<img src="https://github.com/tealight03/2024React/assets/138011998/f4765f38-78db-478b-8f70-67fa218c39b4" width="350"><br>

```
import { useState } from "react";

const Area = () => {
    const [size, setSize] = useState({ width: 200, height: 100 });
    return (
        <div>
            <h1>
                너비 : {size.width}, 높이 : {size.height}
            </h1>
            <button
                onClick={() => {
                    const copy = { ...size };
                    copy.width += 20;
                    setSize(copy);
                }}
            >
                너비 증가
            </button>
            <button
                onClick={() => {
                    const copy = { ...size };
                    copy.height += 10;
                    setSize(copy);
                }}
            >
                높이 증가
            </button>
        </div>
    );
};
export default Area;
```
<b>Area.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import Area from "./Area.jsx"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Area />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>경고창 띄우기</b></h3>

<img src="https://github.com/tealight03/2024React/assets/138011998/3f193aa6-8bfe-4bcd-9ea9-5d1cab555119" width="550"><br>

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
        <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            // 컴포넌트를 정의합니다.
            class Hello extends React.Component {
                render() {
                    // 이벤트를 정의합니다.
                    const clickHandler = (e) => {
                        window.alert("안녕하세요.");
                    };
                    // 클릭 이벤트를 지정합니다.
                    return <div onClick={clickHandler}>Click Me</div>;
                }
            }
            // 컴포넌트를 사용합니다.
            ReactDOM.render(<Hello />, document.getElementById("root"));
        </script>
    </body>
</html>
```
<b>default.html</b><br>

<h3><b>클릭했을 때 클래스의 메소드 호출</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/6808fe0e-74da-43b8-897b-2c247ec366b6" width="550"><br>

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
        <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            // 컴포넌트를 정의합니다.
            class Hello extends React.Component {
                constructor(props) {
                    super(props);
                    // 이벤트 핸들러의 this를 설정합니다. --- (※1)
                    this.clickHandler = this.clickHandler.bind(this);
                }
                clickHandler(e) {
                    const name = this.props.name;
                    window.alert(`${name}님 안녕하세요.`);
                }
                render() {
                    // 클릭 이벤트를 지정합니다. --- (※2)
                    return <div onClick={this.clickHandler}>Click Me</div>;
                }
            }
            // 컴포넌트를 사용합니다.
            ReactDOM.render(
                <Hello name="홍길동" />,
                document.getElementById("root")
            );
        </script>
    </body>
</html>
```
<b>default.html</b><br>

<h3><b>간단한 체크박스 구현하기</b></h3>

<img src="https://github.com/tealight03/2024React/assets/138011998/1073f4b0-2c34-4f1a-8dad-27d95f504cda" width="150"><br>
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
        <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.min.js"></script>
    </head>
    <body>
        <div id="root"></div>
        <script type="text/babel">
            // 상태를 가진 컴포넌트를 정의합니다.
            class CBox extends React.Component {
                // 생성자
                constructor(props) {
                    super(props);
                    // 상태를 초기화합니다.
                    this.state = { checked: false };
                }
                render() {
                    // 체크되지 않았을 때의 상태
                    let mark = "□";
                    let bstyle = { fontWeight: "normal" };
                    // 체크돼 있는지 확인합니다.
                    if (this.state.checked) {
                        mark = "■";
                        bstyle = { fontWeight: "bold" };
                    }
                    // 클릭했을 때의 이벤트를 지정합니다.
                    const clickHandler = (e) => {
                        const newValue = !this.state.checked;
                        this.setState({ checked: newValue });
                    };
                    // 렌더링할 내용을 반환합니다.
                    return (
                        <div onClick={clickHandler} style={bstyle}>
                            {mark} {this.props.label}
                        </div>
                    );
                }
            }
            // 리액트로 DOM의 내용을 변경합니다.
            const dom = (
                <div>
                    <CBox label="Apple" />
                    <CBox label="Banana" />
                    <CBox label="Orange" />
                    <CBox label="Mango" />
                </div>
            );
            ReactDOM.render(dom, document.getElementById("root"));
        </script>
    </body>
</html>
```
<b>default.html</b><br>

<h3><b>라이프 사이클 확인하기</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/30ca4e2b-7215-4224-b7ea-03ddf7869802" width="600"><br><br>

```
import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};
class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called.`);
    }
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }
    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}
export default Notification;
```
<b>Notification.jsx</b><br>

```
import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];
var timer;
class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [],
        };
    }
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({ notifications: [] });
                clearInterval(timer);
            }
        }, 1000);
    }
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}
export default NotificationList;
```
<b>NotificationList.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: "World!" };
    }
    componentDidMount() {
        console.log("componentDidMount()");
    }
    changeState() {
        this.setState({ hello: "Geek!" });
    }
    render() {
        return (
            <div>
                <h1>
                    GeeksForGeeks.org, Hello
                    {this.state.hello}
                </h1>
                <h2>
                    <a onClick={this.changeState.bind(this)}>Press Here!</a>
                </h2>
            </div>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate()");
        return true;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test />);
```
<b>Test.jsx</b><br>

```
import React, { Component } from "react";
class App extends Component {
    // 마운트
    constructor(props) {
        super(props);
        console.log("constructor");
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    // 변경
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    // 언마운트
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render() {
        console.log("render");
        const setStateHandler = (e) => {
            console.log("* call setState()");
            this.setState({ r: Math.random() });
        };
        return (
            <div>
                <button onClick={setStateHandler}>setState</button>
            </div>
        );
    }
}
export default App;
```
<b>App.js</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import NotificationList from "./NotificationList";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NotificationList />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>스톱워치 만들기</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/8f298e0f-42ae-4728-9507-cfb9334d5475" width="300"><br>

```
import React, { Component } from "react";
import "./Stopwatch.css";

// Stopwatch 컴포넌트를 정의합니다.
class Stopwatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 초깃값을 설정합니다.
            isLive: false,
            curTime: 0,
            startTime: 0,
        };
        this.timerId = 0;
    }
    // 마운트했을 때
    componentWillMount() {
        this.timerId = setInterval((e) => {
            this.tick();
        }, 1000);
    }
    // 언마운트했을 때
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    // 매 초 실행됩니다.
    tick() {
        if (this.state.isLive) {
            const v = new Date().getTime();
            this.setState({ curTime: v });
        }
    }
    // 시작/중지 버튼을 클릭했을 때
    clickHandler(e) {
        // 중지할 때
        if (this.state.isLive) {
            this.setState({ isLive: false });
            return;
        }
        // 시작할 때
        const v = new Date().getTime();
        this.setState({
            curTime: v,
            startTime: v,
            isLive: true,
        });
    }
    // 출력할 시계를 생성합니다.
    getDisp() {
        const s = this.state;
        const delta = s.curTime - s.startTime;
        const t = Math.floor(delta / 1000);
        const ss = t % 60;
        const m = Math.floor(t / 60);
        const mm = m % 60;
        const hh = Math.floor(mm / 60);
        const z = (num) => {
            const s = "00" + String(num);
            return s.substr(s.length - 2, 2);
        };
        return (
            <span className="disp">
                {z(hh)}:{z(mm)}:{z(ss)}
            </span>
        );
    } // 화면 렌더링
    render() {
        let label = "START";
        if (this.state.isLive) {
            label = "STOP";
        }
        const disp = this.getDisp();
        const fclick = (e) => this.clickHandler(e);
        return (
            <div className="Stopwatch">
                <div>{disp}</div>
                <button onClick={fclick}>{label}</button>
            </div>
        );
    }
}
export default Stopwatch;
```
<b>Stopwatch.jsx</b><br>

```
.Stopwatch {
    text-align: center;
}

.disp {
    font-size: 70px;
}

button {
    font-size: 24px;
    width: 280px;
}
```
<b>Stopwatch.css</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import Stopwatch from "./Stopwatch.jsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Stopwatch />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>간단한 입력 양식 만들기</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/2e923394-3096-4c69-b3d3-3d7e1ef4f323" width="600"><br>

```
import React from "react";

// 입력 양식 컴포넌트입니다.
export class SimpleForm extends React.Component {
    constructor(props) {
        super(props);
        // 상태를 초기화합니다.
        this.state = { value: "" };
    }
    // 값이 변경됐을 때
    doChange(e) {
        const newValue = e.target.value;
        this.setState({ value: newValue });
    }
    // 전송 버튼을 눌렀을 때
    doSubmit(e) {
        window.alert("전송: " + this.state.value);
        e.preventDefault();
    }
    // 화면 렌더링
    render() {
        // 이벤트를 메서드에 바인딩합니다.
        const doSubmit = (e) => this.doSubmit(e);
        const doChange = (e) => this.doChange(e);
        return (
            <form onSubmit={doSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={doChange}
                />
                <input type="submit" value="전송" />
            </form>
        );
    }
}
```
<b>SimpleForm.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import { SimpleForm } from "./SimpleForm.jsx";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <SimpleForm />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>숫자만 입력받는 텍스트박스 만들기</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/3ea87fab-fba4-4680-b609-6e939a72f75a" width="600"><br>

```
import React, { Component } from "react";

// 숫자 입력 컴포넌트
export default class NumberForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };
    }
    // 값이 변경됐을 때
    doChange(e) {
        const curValue = e.target.value;
        // 숫자 이외의 값을 제거합니다.
        const newValue = curValue.replace(/[^0-9]/g, "");
        this.setState({ value: newValue });
    }
    // 전송 버튼을 눌렀을 때
    doSubmit(e) {
        window.alert("전송: " + this.state.value);
        e.preventDefault();
    }
    // 화면 렌더링
    render() {
        // 이벤트를 메서드에 바인딩합니다.
        const doSubmit = (e) => this.doSubmit(e);
        const doChange = (e) => this.doChange(e);
        return (
            <form onSubmit={doSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={doChange}
                />
                <input type="submit" value="전송" />
            </form>
        );
    }
}
```
<b>NumberForm.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import NumberForm from "./NumberForm.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NumberForm />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>여러 개의 입력 항목을 가진 입력 양식 만들기</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/e5e044e9-0a45-41c6-9dbb-efa874284859" width="500"><br>

```
import React, { Component } from "react";

// 여러 개의 입력 항목을 가진 컴포넌트
export default class MultiForm extends Component {
    constructor(props) {
        super(props);
        // 입력 양식의 초깃값을 설정합니다.
        this.state = {
            name: "홍길동",
            age: 300,
            hobby: "개발",
        };
    }
    // 값이 변경됐을 때
    doChange(e) {
        const userValue = e.target.value;
        const key = e.target.name;
        this.setState({ [key]: userValue });
    }
    // 전송 버튼을 눌렀을 때
    doSubmit(e) {
        e.preventDefault();
        const j = JSON.stringify(this.state);
        window.alert(j);
    }
    // 화면 렌더링
    render() {
        // 이벤트를 메서드에 바인딩합니다.
        const doSubmit = (e) => this.doSubmit(e);
        const doChange = (e) => this.doChange(e);
        return (
            <form onSubmit={doSubmit}>
                <div>
                    <label>
                        이름: <br />
                        <input
                            name="name"
                            type="text"
                            value={this.state.name}
                            onChange={doChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        나이: <br />
                        <input
                            name="age"
                            type="number"
                            value={this.state.age}
                            onChange={doChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        취미: <br />
                        <input
                            name="hobby"
                            type="text"
                            value={this.state.hobby}
                            onChange={doChange}
                        />
                    </label>
                </div>
                <input type="submit" value="전송" />
            </form>
        );
    }
}
```
<b>MultiForm.jsx</b><br>

```
.multiForm {
    width: 400px;
    text-align: left;
    margin-left: auto;
}

.multiForm p {
    margin: 4px
    ; padding: 4px;
}
```
<b>multiForm.css</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import MultiForm from "./MultiForm.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MultiForm />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

# 웹프로그래밍 6주차 과제(04/08)
<h3><b>과제 설명</b></h3>
아래의 조건들을 만족하는 웹사이트 구축하기<br><br>
<ul>
    <li>총 5개 이상의 컴포넌트로 구성</li>
    <li>2개 이상의 props를 전달하는 컴포넌트 1개 이상 포함</li>
    <li>2개 이상의 state를 가진 컴포넌트 1개 이상 포함</li>
    <li>1개 이상의 props와 state를 가진 컴포넌트 1개 이상 포함</li>
    <li>회원가입 페이지 포함</li>
</ul><hr>

<img src="https://github.com/tealight03/2024React/assets/138011998/583b00b9-f626-44fd-9f8d-eaa80ccf8d8e" width="450"><br>
<b>개인 웹사이트(펼쳐진 상태)</b><br>

<img src="https://github.com/tealight03/2024React/assets/138011998/8252bc79-237d-4895-b2f7-c1bcf9228ae8" width="450"><br>
<b>개인 웹사이트(펼치기 전)</b><br>

```
import React, { useState, useEffect } from 'react';

function Profile() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="wrapper">
            <div className="header">
                <h1><b>My Profile</b></h1>
                <Clock />
            </div>
            <MyInfo name="김다빈" department="경성대학교 소프트웨어학과" studentId="2022564004" birthday="2003년 7월 6일" interest="네트워크 보안, 컴퓨터 시스템" mbti="ISTJ" />
            <br /><br />
            <LearnedLanguages languages={["C Language", "C plus plus", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL"]} />
            <br />
            <Platforms platforms={["Git & GitHub", "MySQL", "MariaDB", "Eclipse", "Visual Studio", "Visual Studio Code"]} />
            <br />
            <Certificates certificates={["TOEIC 795", "MS AI-900", "MS AZ-900", "한자능력검정시험 3급", "한능검 2급"]} />
        </div>
    );
}

function Clock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <p><b>{currentTime.toLocaleTimeString()}</b></p>
        </div>
    );
}

function MyInfo({ name, department, studentId, birthday, interest, mbti }) {
    const [isExpanded, setIsExpanded] = useState(false); // 새로운 상태 추가

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section id="my_info">
            <h2>My info</h2>
            <img src="./gwangalli_beach.jpg" alt="myprofile" />
            <button onClick={toggleExpand}>{isExpanded ? '접기' : '펼치기'}</button> {/* 펼치기/접기 버튼 */}
            {isExpanded && (
                <table>
                    <tbody>
                        <tr id="myname">
                            <th>이름</th>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <th>소속</th>
                            <td>{department}</td>
                        </tr>
                        <tr>
                            <th>학번</th>
                            <td>{studentId}</td>
                        </tr>
                        <tr>
                            <th>생일</th>
                            <td>{birthday}</td>
                        </tr>
                        <tr>
                            <th>관심 전공 분야</th>
                            <td>{interest}</td>
                        </tr>
                        <tr>
                            <th>MBTI</th>
                            <td>{mbti}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </section>
    );
}

function LearnedLanguages({ languages }) {
    const [selectedLanguage, setSelectedLanguage] = useState(null); // 선택된 언어를 저장하는 상태
    const [languageLevel, setLanguageLevel] = useState(''); // 선택된 언어의 레벨을 저장하는 상태

    const handleLanguageClick = (language) => {
        setSelectedLanguage(language);
    };

    const handleLevelChange = (event) => {
        setLanguageLevel(event.target.value);
    };

    return (
        <section className="resume">
            <h2>Learned Language</h2>
            <p>선택된 언어: {selectedLanguage}</p>
            <select value={languageLevel} onChange={handleLevelChange}>
                <option value="">레벨 선택</option>
                <option value="Beginner">초급</option>
                <option value="Intermediate">중급</option>
                <option value="Advanced">고급</option>
            </select>
            <ol>
                {languages.map((language, index) => (
                    <li key={index} onClick={() => handleLanguageClick(language)}>
                        {language}
                    </li>
                ))}
            </ol>
        </section>
    );
}

function Platforms({ platforms }) {
    return (
        <section className="resume">
            <h2>Platforms</h2>
            <ol>
                {platforms.map((platform, index) => (
                    <li key={index}>{platform}</li>
                ))}
            </ol>
        </section>
    );
}

function Certificates({ certificates }) {
    return (
        <section className="resume">
            <h2>Certificate</h2>
            <ol>
                {certificates.map((certificate, index) => (
                    <li key={index}>{certificate}</li>
                ))}
            </ol>
        </section>
    );
}

export default Profile;
```
<b>info.jsx</b><br>

```
.header {
    display: flex;
    flex-direction: row; /* 가로 방향으로 요소 배치 */
    align-items: center; /* 수직 가운데 정렬 */
}

.header h1 {
    margin-right: 380px; /* My Profile과 Clock 사이의 간격을 조정 */
}

.clock {
    font-size: 16px;
}

h2, h3 {
    font-family: sans-serif;
}

h2 {
    margin: 0 0 20px 0;
    text-transform: uppercase;
    font-size: 22px;
}

.wrapper {
    width: 85%;
    margin: 20px auto;
}

#my_info h2 {
    display: none;
}

#my_info img {
    width: 125px;
    height: 125px;
    border-radius: 50px;
    margin-right: 40px;
} 

table {
    display: inline-block;
    border-collapse: collapse;
    border-spacing: 0;
    vertical-align: top;
}

th {
    text-align: left;
    padding-right: 20px;
}

th, td {
    font-size: 16px;
}

.resume ol {
    list-style: none;
    padding: 0;
}

.resume li {
    display: inline-block;
    background-color: #a4c0f4;
    padding: 4px 10px;
    border-radius: 32px;
    margin: 0 8px 8px 0;
    font-size: 14px;
}

.resume li::before {
    content: "#";
}
```
<b>style.css</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from './0401/info'
import './0401/style.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Info />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<br><hr>
<img src="https://github.com/tealight03/2024React/assets/138011998/8207c215-961a-4c92-a55e-a3a00d10b13d" width="300"><br>
<b>회원가입 페이지</b><br>
```
import React, { useState } from 'react';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="signup-form-container">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="username">사용자 이름:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">이메일:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">가입하기</button>
            </form>
        </div>
    );
};

export default SignupForm;
```
<b>SignUpForm.jsx</b><br>

```
.signup-form-container {
    width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.signup-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
}

input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 5px;
}

button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
```
<b>style.css</b><br>

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import SignupForm from './0408/SignupForm';
import './0408/style.css';

//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SignupForm />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>
