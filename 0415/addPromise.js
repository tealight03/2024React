function addNumbers(a, b) {
    return new Promise((resolve, reject) => {
        let sum = a + b;
        if (isNaN(sum)) {
            reject(new Error("잘못된 입력입니다. 숫자를 입력해주세요."));
        } else {
            resolve(sum);
        }
    });
}

function printResult(result) {
    console.log("최종 결과:", result);
}

// Promise를 이용한 콜백 지옥 해결
addNumbers(5, 3)
    .then(sum => addNumbers(sum, 2))
    .then(sumPlusTwo => addNumbers(sumPlusTwo, 4))
    .then(finalResult => printResult(finalResult))
    .catch(error => console.error("오류 발생:", error.message));
