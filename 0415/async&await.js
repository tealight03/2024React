async function addNumbers(a, b) {
    // 비동기적으로 두 숫자를 더한 후 결과를 반환
    let sum = a + b;
    // 잠시 대기
    await new Promise(resolve => setTimeout(resolve, 1000));
    return sum;
}

// addNumbers 함수 호출
async function main() {
    try {
        const result = await addNumbers(5, 3);
        console.log("덧셈 결과:", result);
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

// main 함수 호출
main();
