function addNumbers(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

// addNumbers 함수 호출 및 콜백 함수 전달
addNumbers(5, 3, function(result) {
    console.log("덧셈 결과:", result);
});

// -----------------------------------------------------------------

// 콜백 함수 정의
function printResult(result) {
    console.log("덧셈 결과:", result);
}

// addNumbers 함수 호출 및 콜백 함수 전달
addNumbers(5, 3, printResult);

