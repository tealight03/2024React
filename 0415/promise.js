function add(a, b) {
    return new Promise((resolve, reject) => {
        // 두 숫자를 더하고 결과를 resolve로 반환
        const sum = a + b;
        if (isNaN(sum)) {
            // 만약 덧셈 결과가 유효하지 않으면 오류를 reject로 반환
            reject(new Error("잘못된 입력입니다. 숫자를 입력해주세요."));
        } else {
            resolve(sum);
        }
    });
}

// add 함수 사용 예제
add(3, 5)
    .then(result => {
        console.log("덧셈 결과:", result);
    })
    .catch(error => {
        console.error("덧셈 과정에서 오류가 발생했습니다:", error.message);
    });

    