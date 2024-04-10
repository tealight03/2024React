# 2024.04.01 강의 실습 정리(5주차)
<b>시계 실습</b><br>
<img width="489" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/6fc4311f-0250-47fb-81bd-d216d6031967"><br>
<b>jsClock.html</b><br>

<img src="https://github.com/tealight03/2024React/assets/138011998/7976081b-714a-46c7-a6d2-4a488c5d9706" width="700"><br>
<hr>

<b>Function Component 실습</b><br>
※ 단축키 => rsf<br><br>
<img width="371" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/d3ab08ef-4615-47c3-8179-116004e0f41b"><br>
<b>Header.js</b><br>

<img width="372" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/2e115be0-40c8-45f3-8364-158f202fd853"><br>
<b>Main.js</b><br>

<img width="370" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/7a735577-4c7f-40a0-95eb-2362cd3b508f"><br>
<b>Footer.js</b><br>

<img width="674" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/233d5408-713c-4c16-b099-00e430ab79fe"><br>
<b>App.js</b><br>

<img width="291" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/9753b7f6-9b9b-45b9-8240-d9de0d89ae75"><br>
<b>실행 화면</b><br>

<hr>
<b>Class Component 실습</b><br>
※ 단축키 => rcc<br><br>
<img width="482" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/7c824607-15eb-40fb-a25c-9fe89966196e"><br>
<b>Header.js</b><br>

<img width="487" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/8c2b2775-8410-46a4-90a0-f4b3455de8c9"><br>
<b>Main.js</b><br>

<img width="484" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/1e106b29-22d7-455a-9083-e48306d1471a"><br>
<b>Footer.js</b><br>

<img width="675" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/aa02d96e-f6c0-4b21-b9a6-9bb26f5b0bf8"><br>
<b>App.js</b><br>

<img width="292" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/174c1fdd-d982-4d1b-b910-7455044e3fde"><br>
<b>실행 화면</b><br>

# 웹프로그래밍응용 5주차 과제(04/01)
<p>
  <h3><b>과제 설명</b></h3>
  두 개의 props를 전달하는 컴포넌트를 하나 이상 포함하여<br>
  최소 3개의 컴포넌트로 구성된 웹사이트를 구축하라.<br>
</p>

<img src="https://github.com/tealight03/2024React/assets/138011998/48f45128-5d07-4888-80e5-6e03ff72eb91" width="650"><br>
<b>구축된 웹사이트 화면</b><br><br>

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
<b>index.js</b><br><br>

```
import React from 'react';

function Profile() {
    return (
        <div className="wrapper">
            <h1><b>Profile</b></h1>
            <MyInfo name="김다빈" department="경성대학교 소프트웨어학과" studentId="2022564004" birthday="2003년 7월 6일" interest="네트워크 보안, 컴퓨터 시스템" mbti="ISTJ" />
            <br /><br />
            <LearnedLanguages languages={["C Language", "C plus plus", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL"]} />
            <br />
            <Platforms platforms={["Git & GitHub", "MySQL", "MariaDB", "Eclipse", "Visual Studio", "Visual Studio Code"]} />
            <br />
            <Certificates certificates={["TOEIC 795", "MS AI-900", "MS AZ-900"]} />
        </div>
    );
}

function MyInfo({ name, department, studentId, birthday, interest, mbti }) {
    return (
        <section id="my_info">
            <h2>My info</h2>
            <img src="./gwangalli_beach.jpg" alt="myprofile" />
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
        </section>
    );
}

function LearnedLanguages({ languages }) {
    return (
        <section class="resume">
            <h2>Learned Language</h2>
            <ol>
                {languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ol>
        </section>
    );
}

function Platforms({ platforms }) {
    return (
        <section class="resume">
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
        <section class="resume">
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
<b>info.jsx</b><br><br>

```
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
