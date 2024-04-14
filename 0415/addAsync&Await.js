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

// async/await을 이용하여 콜백 지옥 해결
async function calculate() {
    try {
        const sum1 = await addNumbers(5, 3);
        const sum2 = await addNumbers(sum1, 2);
        const finalResult = await addNumbers(sum2, 4);
        printResult(finalResult);
    } catch (error) {
        console.error("오류 발생:", error.message);
    }
}

calculate();
