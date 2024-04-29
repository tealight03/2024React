// 고차 함수의 예시: 전달받은 operation 함수에 value를 전달하여 호출
function applyOperation(value1, value2, operation) {
    return operation(value1, value2);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function power(x, y) {
    return Math.pow(x, y);
}

// 함수를 매개변수로 전달하여 고차 함수 호출
console.log(applyOperation(5, 3, add)); // 8
console.log(applyOperation(5, 3, multiply)); // 15
console.log(applyOperation(5, 3, power)); // 125

