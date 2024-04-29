const func1 = function() {
	console.log("Hello World");
}

// 자료형 확인
typeof f1;  // 'function'

// 예시 : 이벤트 리스너 등록
button.addEventListener('click', () => { console.log('버튼 클릭') });

const func = () => {
    return () => {
        console.log('hello');
    }
}