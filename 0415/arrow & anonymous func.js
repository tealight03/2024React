const addNumbers = (a, b, callback) => {
    let sum = a + b;
    callback(sum);
};

// -------------------------------------

const printResult = function(result) {
    console.log("최종 결과:", result);
};
