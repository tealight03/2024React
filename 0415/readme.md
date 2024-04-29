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

<h3><b>Passing the next state directly</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/fac18a77-ce68-446f-825e-3e8ccd20816a" width="250"><br>
Updater function을 패스하지 못하므로 "+3" 버튼이 의도대로 작동하지 X

```
import React, { Component } from "react";
import { useState } from 'react';

export default function Counter() {
    const [age, setAge] = useState(42);
    function increment() {
        setAge(age + 1);
    }
    return (
        <>
            <h1>Your age: {age}</h1>
            <button
                onClick={() => {
                    increment();
                    increment();
                    increment();
                }}
            >
                +3
            </button>
            <button
                onClick={() => {
                    increment();
                }}
            >
                +1
            </button>
        </>
    );
}
```
<b>Counter.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Counter from "./Counter.jsx";

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

<h3><b>Passing the updater function</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/a07a80f5-c0ff-4249-b839-60f3d23dce94" width="250><br>
Updater function을 통과하므로 "+3" 버튼이 의도대로 동작 O<br>

```
import { useState } from "react";
export default function Counter() {
    const [age, setAge] = useState(42);
    function increment() {
        setAge((a) => a + 1);
    }
    return (
        <>
            <h1>Your age: {age}</h1>
            <button
                onClick={() => {
                    increment();
                    increment();
                    increment();
                }}
            >
                +3
            </button>
            <button
                onClick={() => {
                    increment();
                }}
            >
                +1
            </button>
        </>
    );
}
```
<b>Counter.js</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import Counter from "./Counter.jsx";

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

<h3><b>Examples of objects and arrays in state(1)</b></h3>
Hard Coding Version

<img src="https://github.com/tealight03/2024React/assets/138011998/255d7d6a-2500-4272-b918-d6b1d53b9fa3" width="450"><br>

```
import { useState } from "react";

export default function Form() {
    const [person, setPerson] = useState({
        name: "Niki de Saint Phalle",
        artwork: {
            title: "Blue Nana",
            city: "Hamburg",
            image: "https://i.imgur.com/Sd1AgUOm.jpg",
        },
    });
    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value,
        });
    }
    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value,
            },
        });
    }
    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value,
            },
        });
    }
    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value,
            },
        });
    }
    return (
        <>
            <label>
                Name:
                <input value={person.name} onChange={handleNameChange} />
            </label>
            <label>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <label>
                Image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {" by "}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img src={person.artwork.image} alt={person.artwork.title} />
        </>
    );
}
```
<b>Form.jsx</b><br>

```
import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
    const [title, setTitle] = useState("");
    return (
        <>
            <input
                placeholder="Add todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={() => {
                    setTitle("");
                    onAddTodo(title);
                }}
            >
                Add
            </button>
        </>
    );
}
```
<b>AddTodo.js</b><br>

```
import { useState } from "react";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ todo, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContent;
    if (isEditing) {
        todoContent = (
            <>
                <input
                    value={todo.title}
                    onChange={(e) => {
                        onChange({
                            ...todo,
                            title: e.target.value,
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else {
        todoContent = (
            <>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                    onChange({
                        ...todo,
                        done: e.target.checked,
                    });
                }}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </label>
    );
}
```
<b>TakeList.js</b><br>

```
import { useState } from "react";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
];
export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);
    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false,
            },
        ]);
    }
    function handleChangeTodo(nextTodo) {
        setTodos(
            todos.map((t) => {
                if (t.id === nextTodo.id) {
                    return nextTodo;
                } else {
                    return t;
                }
            })
        );
    }
    function handleDeleteTodo(todoId) {
        setTodos(todos.filter((t) => t.id !== todoId));
    }
    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}
```
<b>Add.js</b><br>

<h3><b>Examples of objects and arrays in state(2)</b></h3>
Immer 라이브러리를 이용하여 코드를 간결하게 수정<br>
※ package.json, App.js를 수정<br><br>

```
{
  "name": "newcompo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "dependencies": {
      "immer": "1.7.3",
      "react": "latest",
      "react-dom": "latest",
      "react-scripts": "latest",
      "use-immer": "0.5.1"
      },
      "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test --env=jsdom",
      "eject": "react-scripts eject"
      },
      "devDependencies": {}
  } 
}
```
<b>package.json</b><br>

```
import { useState } from "react";
import { useImmer } from "use-immer";

let nextId = 3;
const initialList = [
    { id: 0, title: "Big Bellies", seen: false },
    { id: 1, title: "Lunar Landscape", seen: false },
    { id: 2, title: "Terracotta Army", seen: true },
];
export default function BucketList() {
    const [list, updateList] = useImmer(initialList);
    function handleToggle(artworkId, nextSeen) {
        updateList((draft) => {
            const artwork = draft.find((a) => a.id === artworkId);
            artwork.seen = nextSeen;
        });
    }
    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList artworks={list} onToggle={handleToggle} />
        </>
    );
}
function ItemList({ artworks, onToggle }) {
    return (
        <ul>
            {artworks.map((artwork) => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={(e) => {
                                onToggle(artwork.id, e.target.checked);
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    );
}
```
<b>App.js</b><br>

<h3><b>The difference between passing an initializer and passing the initial state directly example(1)</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/0295cc2c-782f-4350-a123-db8352421e68" width="300"><br><br>
initializer 함수를 전달하므로 createInitialTodos 함수는 초기화 중에만 실행된다.<br>
input에 입력할 때와 같이 구성요소가 리렌더링될 때는 실행되지 않는다.<br><br>

```
import { useState } from "react";

function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < 50; i++) {
        initialTodos.push({
            id: i,
            text: "Item " + (i + 1),
        });
    }
    return initialTodos;
}
export default function TodoList() {
    const [todos, setTodos] = useState(createInitialTodos);
    const [text, setText] = useState("");
    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button
                onClick={() => {
                    setText("");
                    setTodos([
                        {
                            id: todos.length,
                            text: text,
                        },
                        ...todos,
                    ]);
                }}
            >
                Add
            </button>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </>
    );
}
```
<b>TodoList.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import TodoList from "./TodoList.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>The difference between passing an initializer and passing the initial state directly example(2)</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/0295cc2c-782f-4350-a123-db8352421e68" width="300"><br><br>
initializer 함수를 전달하지 않으므로 input에 입력할 때와 같이<br>
모든 렌더링에서 createInitialTodos 함수가 실행된다.<br>
동작 상에서 눈에 띄는 차이는 없지만 이 코드는 효율성이 떨어진다<br><br>

```
import { useState } from "react";

function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < 50; i++) {
        initialTodos.push({
            id: i,
            text: "Item " + (i + 1),
        });
    }
    return initialTodos;
}
export default function TodoList() {
    const [todos, setTodos] = useState(createInitialTodos());
    const [text, setText] = useState("");
    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button
                onClick={() => {
                    setText("");
                    setTodos([
                        {
                            id: todos.length,
                            text: text,
                        },
                        ...todos,
                    ]);
                }}
            >
                Add
            </button>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </>
    );
}
```
<b>TodoList.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import TodoList from "./TodoList.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <TodoList />
    </React.StrictMode>
);
```
<b>index.js</b><br>

<h3><b>Resetting state with a key</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/91ea7dcf-bac3-4d47-9a04-2822fba2845a" width="300"><br>

```
import { useState } from "react";

function createInitialTodos() {
    const initialTodos = [];
    for (let i = 0; i < 50; i++) {
        initialTodos.push({
            id: i,
            text: "Item " + (i + 1),
        });
    }
    return initialTodos;
}
export default function TodoList() {
    const [todos, setTodos] = useState(createInitialTodos());
    const [text, setText] = useState("");
    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button
                onClick={() => {
                    setText("");
                    setTodos([
                        {
                            id: todos.length,
                            text: text,
                        },
                        ...todos,
                    ]);
                }}
            >
                Add
            </button>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </>
    );
}
```
<b>TodoList.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>

<h3><b>Storing information from previous renders</b></h3>
<img src="https://github.com/tealight03/2024React/assets/138011998/bb40ac63-8a9c-4917-9a48-6bbb3234553e" width="300"><br>

```
import { useState } from "react";

import CountLabel from "./CountLabel.jsx";
export default function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <CountLabel count={count} />
        </>
    );
}
```
<b>App.jsx</b><br>

```
import { useState } from "react";

export default function CountLabel({ count }) {
    const [prevCount, setPrevCount] = useState(count);
    const [trend, setTrend] = useState(null);
    if (prevCount !== count) {
        setPrevCount(count);
        setTrend(count > prevCount ? "increasing" : "decreasing");
    }
    return (
        <>
            <h1>{count}</h1>
            {trend && <p>The count is {trend}</p>}
        </>
    );
}
```
<b>CountLabel.jsx</b><br>

```
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
<b>index.js</b><br>
