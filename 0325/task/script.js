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