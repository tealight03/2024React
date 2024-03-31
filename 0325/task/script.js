// Wrapper 요소 생성
const wrapperDiv = document.createElement('div');
wrapperDiv.classList.add('wrapper');

// 제목 요소 생성
const h1 = document.createElement('h1');
h1.innerHTML = '<b>Profile</b>';
wrapperDiv.appendChild(h1);

// 가로선 요소 생성
const hr1 = document.createElement('hr');
wrapperDiv.appendChild(hr1);

// My Info 섹션 생성
const myInfoSection = document.createElement('section');
myInfoSection.id = 'my_info';

// My Info 제목 요소 생성
const myInfoH2 = document.createElement('h2');
myInfoH2.textContent = 'My info';
myInfoSection.appendChild(myInfoH2);

// 이미지 요소 생성
const img = document.createElement('img');
img.src = '../gwangalli_beach.jpg';
img.alt = '김다빈의 얼굴 사진';
img.style.width = '125px';
img.style.height = '125px';
img.style.borderRadius = '50px';
img.style.marginRight = '40px';
myInfoSection.appendChild(img);

// 테이블 요소 생성
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// 테이블 데이터 배열
const tableData = [
    ['이름', '김다빈'],
    ['소속', '경성대학교 소프트웨어학과'],
    ['학번', '2022564004'],
    ['생일', '2003년 7월 6일'],
    ['관심 전공 분야', '네트워크 보안, 컴퓨터 시스템'],
    ['MBTI', 'ISTJ']
];

// 테이블 데이터를 이용하여 테이블 생성
tableData.forEach(data => {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = data[0];
    const td = document.createElement('td');
    td.textContent = data[1];
    tr.appendChild(th);
    tr.appendChild(td);
    tbody.appendChild(tr);
});

table.appendChild(tbody);
myInfoSection.appendChild(table);

wrapperDiv.appendChild(myInfoSection);

// 가로선 요소 생성
const hr2 = document.createElement('hr');
wrapperDiv.appendChild(hr2);

// Resume 섹션 생성
const resumeSection = document.createElement('section');
resumeSection.id = 'resume';

// Education 제목 요소 생성
const educationH2 = document.createElement('h2');
educationH2.innerHTML = '<b>Education</b>';
resumeSection.appendChild(educationH2);

// Education 내용 요소 생성
const educationP = document.createElement('p');
educationP.innerHTML = '2022.02 해운대여자고등학교(졸업)<br>2022.03 ~ 경성대학교 소프트웨어학과 재학';
resumeSection.appendChild(educationP);

// Learned Language 제목 요소 생성
const learnedLanguageH2 = document.createElement('h2');
learnedLanguageH2.textContent = 'Learned Language';
resumeSection.appendChild(learnedLanguageH2);

// Learned Language 목록 요소 생성
const learnedLanguageOl = document.createElement('ol');
const languages = ['C Language', 'C plus plus', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL'];
languages.forEach(language => {
    const li = document.createElement('li');
    li.textContent = language;
    learnedLanguageOl.appendChild(li);
});
resumeSection.appendChild(learnedLanguageOl);

// Platforms 제목 요소 생성
const platformsH2 = document.createElement('h2');
platformsH2.textContent = 'Platforms';
resumeSection.appendChild(platformsH2);

// Platforms 목록 요소 생성
const platformsOl = document.createElement('ol');
const platforms = ['Git & GitHub', 'MySQL', 'MariaDB', 'Eclipse', 'Visual Studio', 'Visual Studio Code'];
platforms.forEach(platform => {
    const li = document.createElement('li');
    li.textContent = platform;
    platformsOl.appendChild(li);
});
resumeSection.appendChild(platformsOl);

// Certificate 제목 요소 생성
const certificateH2 = document.createElement('h2');
certificateH2.textContent = 'Certificate';
resumeSection.appendChild(certificateH2);

// Certificate 목록 요소 생성
const certificateOl = document.createElement('ol');
const certificates = ['TOEIC 795', 'MS AI-900', 'MS AZ-900'];
certificates.forEach(cert => {
    const li = document.createElement('li');
    li.textContent = cert;
    certificateOl.appendChild(li);
});
resumeSection.appendChild(certificateOl);

wrapperDiv.appendChild(resumeSection);

// 가로선 요소 생성
const hr3 = document.createElement('hr');
wrapperDiv.appendChild(hr3);

// Contact 섹션 생성
const contactH2 = document.createElement('h2');
contactH2.innerHTML = '<b>Contact</b>';
wrapperDiv.appendChild(contactH2);

// Contact 내용 요소 생성
const contactP = document.createElement('p');
const gitHubLink = document.createElement('a');
gitHubLink.href = 'https://github.com/tealight03';
gitHubLink.target = '_blank';
gitHubLink.innerHTML = '<b>My GitHub</b>';
const blogLink = document.createElement('a');
blogLink.href = 'https://blog.naver.com/sinsol_0';
blogLink.target = '_blank';
blogLink.innerHTML = '<b>My Blog</b>';
contactP.appendChild(gitHubLink);
contactP.innerHTML += '<br>';
contactP.appendChild(blogLink);
wrapperDiv.appendChild(contactP);

// Body에 wrapperDiv 추가
document.body.appendChild(wrapperDiv);