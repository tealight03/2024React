# 웹프로그래밍응용 3주차 과제(03/18)
<h3><b>[과제 설명]</b></h3>
React App을 실행하면 등장하는 기본 웹페이지(index.html)의<br>
하단부에 있는 "Learn React"라는 문구를 클릭하였을 때 연결되는 페이지 링크를<br>
자신의 깃허브 웹호스팅 url로 변경하고, "Learn React" 문구 또한 개인이 원하는 문구로 수정하여<br>
개인 깃허브 레포지토리에 build 폴더를 업로드하여 외부에서 내 React App에 접근할 수 있도록 할 것
<hr>

<h3><b>[수행 과정]</b></h3>
<img width="794" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/e43f9104-4684-42c3-826e-bc06f2d306b3"><br>
<b>1. App.js 파일에서 App() 함수 일부 수정</b><br>
anchor 태그의 href 속성에 "https://tealight03.github.io/2024React/", <br>
내부 텍스트로 콘텐츠로 "Welcome to React World!!!"라는 데이터로 코드를 수정한다.<br><br>

<img width="650" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/2b1e25ad-216a-4265-8eb8-12a9ee7e375c"><br>
<b>2. production build 새로 생성</b><br>
npm run build 명령어를 실행해 수정한 파일들을 바탕으로 production build 파일을 새로 만든다.<br><br>

<img width="742" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/91a71f45-4b11-4c44-9d60-2e2d69acf253"><br>
<b>3. serve 웹서버의 document root 지정</b><br>
serve라는 이름의 웹서버가 동작될 때 build폴더를 document root로 지정하여 실행되도록 serve -s build 명령어를 실행한다.<br>

<hr>
<h3><b>[결과물]</b></h3>
<b>기존 React App 페이지</b><br>
<img width="337" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/5ed23151-fa90-41f5-a329-2c9e061e5ab5"><br><br>

<b>변경된 React App 페이지</b><br>
<img width="320" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/8036d7c3-8a73-4412-9c93-3b795e034d1b"><br>

<hr>
<h3><b>[테스트]</b></h3>
: React App에서 "Welcome to React World!!!" 라는 문구를 클릭했을 때,<br>
"https://tealight03.github.io/2024React/" 페이지로 올바르게 리다이렉트되는지 확인해본다.<br><br>

<img width="325" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/d2c9a7ad-12cd-4a77-a650-b50351b7fbf7"><br>
<b>1. https://tealight03.github.io/2024React/0318/build/에 접속</b><br><br>

<img width="768" alt="image" src="https://github.com/tealight03/2024React/assets/138011998/b9a8740b-5376-4415-bc74-f63db72f7460"><br>
<b>2. "Welcome to React World!!!" 문구 클릭</b><br><br>

<b>[테스트 결과]</b><br>
: 위 이미지와 같이 개인 깃허브 웹호스팅 페이지로 올바르게 리다이렉트되는 것을 확인할 수 있다.
