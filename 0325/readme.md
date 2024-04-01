# 2024.03.25 강의 실습 정리(4주차)
<img width="611" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/6cbc1590-b433-44f6-86b3-8947472d2a90"><br>
-> Book.jsx<br>

<img width="496" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/91cf6627-fbc6-4d08-9423-638b28dd0195"><br>
-> BookLibrary.jsx<br>

<img width="573" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/f5d8a977-5802-40bb-9eaa-7bcda4d1a410"><br>
-> index.js

<img width="328" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/5956a9de-4dc0-44c9-afc7-dcd4faf98ada"><br>
실행화면

# 웹프로그래밍응용 4주차 과제(03/25)
### html, javascript, jsx를 이용하여 자기소개 페이지 만들기
<img width="596" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/076c2757-8dcb-446e-820d-8a673c5f0646"><br>

<h3><b>[웹페이지 구성 설명]</b></h3>
<p>
  기본 요소인 이름, 소속, 학번 등을 포함하여 다룰 수 있는 언어, 경험해본 플랫폼, 소지한 자격증에 대해 기재하였습니다.<br>
  html, javascript, jsx 파일로 작성 후, 콘텐츠를 꾸미기 위한 css 파일에 링크를 걸어 웹페이지가 실행되도록 구성하였습니다.
</p>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style.css">
    <title>Profile</title>
</head>
<body>
    <div class="wrapper">
        
        <h1><b>Profile</b></h1>
        <section id="my_info">
            <h2>My info</h2>
            <img src="../gwangalli_beach.jpg" alt="myprofile" />
            <table>
                <tbody>
                    <tr id="myname">
                        <th>이름</th>
                        <td>김다빈</td>
                    </tr>
                    <tr>
                        <th>소속</th>
                        <td>경성대학교 소프트웨어학과</td>
                    </tr>
                    <tr>
                        <th>학번</th>
                        <td>2022564004</td>
                    </tr>
                    <tr>
                        <th>생일</th>
                        <td>2003년 7월 6일</td>
                    </tr>
                    <tr>
                        <th>관심 전공 분야</th>
                        <td>네트워크 보안, 컴퓨터 시스템</td>
                    </tr>
                    <tr>
                        <th>MBTI</th>
                        <td>ISTJ</td>
                    </tr>
                </tbody>
            </table>
        </section><br>

        <section id="resume">
            <h2><b>Education</b></h2>
            <p>
                2022.02 해운대여자고등학교(졸업)<br>
                2022.03 ~ 경성대학교 소프트웨어학과 재학
            </p><br>
            <h2>Learned Language</h2>
            <ol>
                <li>C Language</li>
                <li>C plus plus</li>
                <li>Java</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
            </ol>
            <h2>Platforms</h2>
            <ol>
                <li>Git & GitHub</li>
                <li>MySQL</li>
                <li>MariaDB</li>
                <li>Eclipse</li>
                <li>Visual Studio</li>
                <li>Visual Studio Code</li>
            </ol>
            <h2>Certificate</h2>
            <ol>
                <li>TOEIC 795</li>
                <li>MS AI-900</li>
                <li>MS AZ-900</li>
            </ol>
        </section>
    </div>
</body>
</html>
```
<h3></h3>

### Figma로 SPA 웹디자인 기획
<img width="848" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/278c0ea0-f5a4-4e01-bb3b-13be69c9a837"><br>
