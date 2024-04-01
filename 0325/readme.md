# 2024.03.25 강의 실습 정리(4주차)
<h3><b>[실습 내용 설명]</b></h3>
Book 함수가 정의된 Book.jsx와 BookLibrary.jsx 파일을 이용하여<br>
Virtual DOM을 렌더링하고, 해당 트리로 실제 DOM이 구성되도록 실습.<br>
이를 위해 src 폴더 하위에 JSXCode라는 폴더를 만들고,<br>
해당 폴더에 Book.jsx, BookLibrary.jsx를 우선 작성.<br>
이후 index.js 파일을 아래 이미지와 같이 수정하여 렌더링 실행<br><br>

<img width="611" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/6cbc1590-b433-44f6-86b3-8947472d2a90"><br>
<b>Book.jsx</b><br>

<img width="496" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/91cf6627-fbc6-4d08-9423-638b28dd0195"><br>
<b>BookLibrary.jsx</b><br>

<img width="573" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/f5d8a977-5802-40bb-9eaa-7bcda4d1a410"><br>
<b>index.js</b><br>

<img width="328" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/5956a9de-4dc0-44c9-afc7-dcd4faf98ada"><br>
<b>실습 실행 화면</b><br>

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
<b>madebyhtml.html</b><br><br>

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
    <script src="../script.js"></script>
</body>
</html>
```
<b>madebyjs.html</b><br><br>

```
document.addEventListener('DOMContentLoaded', function() {
    // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    // Profile header
    const profileHeader = document.createElement('h1');
    profileHeader.innerHTML = '<b>Profile</b><br>';
    wrapper.appendChild(profileHeader);

    // My info section
    const myInfoSection = document.createElement('section');
    myInfoSection.id = 'my_info';

    const myInfoHeader = document.createElement('h2');
    myInfoHeader.textContent = 'My info';
    myInfoSection.appendChild(myInfoHeader);

    const image = document.createElement('img');
    image.src = '../gwangalli_beach.jpg';
    image.alt = 'myprofile';
    myInfoSection.appendChild(image);

    const infoTable = document.createElement('table');
    const tbody = document.createElement('tbody');

    const infoData = {
        '이름': '김다빈',
        '소속': '경성대학교 소프트웨어학과',
        '학번': '2022564004',
        '생일': '2003년 7월 6일',
        '관심 전공 분야': '네트워크 보안, 컴퓨터 시스템',
        'MBTI': 'ISTJ'
    };

    for (const key in infoData) {
        const row = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = key;
        const td = document.createElement('td');
        td.textContent = infoData[key];
        row.appendChild(th);
        row.appendChild(td);
        tbody.appendChild(row);
    }

    infoTable.appendChild(tbody);
    myInfoSection.appendChild(infoTable);
    wrapper.appendChild(myInfoSection);

    // Resume section
    const resumeSection = document.createElement('section');
    resumeSection.id = 'resume';

    const educationHeader = document.createElement('h2');
    educationHeader.innerHTML = '<br><b>Education</b>';
    resumeSection.appendChild(educationHeader);

    const educationContent = document.createElement('p');
    educationContent.innerHTML = '2022.02 해운대여자고등학교(졸업)<br>2022.03 ~ 경성대학교 소프트웨어학과 재학<br><br>';
    resumeSection.appendChild(educationContent);

    const learnedLanguageHeader = document.createElement('h2');
    learnedLanguageHeader.textContent = 'Learned Language';
    resumeSection.appendChild(learnedLanguageHeader);

    const learnedLanguageList = document.createElement('ol');
    const languages = ['C Language', 'C plus plus', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL'];
    languages.forEach(function(language) {
        const listItem = document.createElement('li');
        listItem.textContent = language;
        learnedLanguageList.appendChild(listItem);
    });
    resumeSection.appendChild(learnedLanguageList);

    const platformsHeader = document.createElement('h2');
    platformsHeader.textContent = 'Platforms';
    resumeSection.appendChild(platformsHeader);

    const platformsList = document.createElement('ol');
    const platforms = ['Git & GitHub', 'MySQL', 'MariaDB', 'Eclipse', 'Visual Studio', 'Visual Studio Code'];
    platforms.forEach(function(platform) {
        const listItem = document.createElement('li');
        listItem.textContent = platform;
        platformsList.appendChild(listItem);
    });
    resumeSection.appendChild(platformsList);

    const certificateHeader = document.createElement('h2');
    certificateHeader.textContent = 'Certificate';
    resumeSection.appendChild(certificateHeader);

    const certificateList = document.createElement('ol');
    const certificates = ['TOEIC 795', 'MS AI-900', 'MS AZ-900'];
    certificates.forEach(function(certificate) {
        const listItem = document.createElement('li');
        listItem.textContent = certificate;
        certificateList.appendChild(listItem);
    });
    resumeSection.appendChild(certificateList);

    wrapper.appendChild(resumeSection);

    // Append wrapper to body
    document.body.appendChild(wrapper);
});
```
<b>script.js</b><br><br>

```
import React from 'react';

function Profile() {
    return (
        <div className="wrapper">
            <h1><b>Profile</b></h1>
            <section id="my_info">
                <h2>My info</h2>
                <img src="./gwangalli_beach.jpg" alt="myprofile" />
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
            </section>
            <br />
            <section id="resume">
                <h2><b>Education</b></h2>
                <p>
                    2022.02 해운대여자고등학교(졸업)<br />
                    2022.03 ~ 경성대학교 소프트웨어학과 재학
                </p>
                <br />
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
    );
}

export default Profile;
```
<b>Profile.jsx</b><br><br>

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

#resume ol {
    list-style: none;
    padding: 0;
}

#resume li {
    display: inline-block;
    background-color: #a4c0f4;
    padding: 4px 10px;
    border-radius: 32px;
    margin: 0 8px 8px 0;
    font-size: 14px;
}

#resume li::before {
    content: "#";
}
```
<b>style.css</b><br><br>

### Figma로 SPA 웹디자인 기획
<img width="848" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/278c0ea0-f5a4-4e01-bb3b-13be69c9a837"><br>
<img width="785" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/7966508e-c9e6-4335-87a1-4503b2cca0fa"><br>

<b>[웹디자인 구상 내용]</b><br>
<p>
  html, javascript, jsx로 제작한 웹페이지를 조금 수정하여 SPA 형식의 웹디자인을 기획하였습니다.<br>
  각 탭을 클릭하면 탭에 따른 내부 콘텐츠가 조금씩 달라지도록 SPA 형식을 구상하여 위와 같이 디자인하였습니다.<br>
  아래의 링크를 클릭하시면 바로 테스트 해보실 수 있습니다.<br>
</p>
<a href="https://www.figma.com/file/sVFDujYdQl3dTuoVFvh15f/MyPortpolio?type=design&node-id=0%3A1&mode=design&t=lni5ZyZvj3mIZO9H-1" target="_blank"><b>Click here to move!</b></a>
