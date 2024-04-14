function addNumbers(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

function printResult(result) {
    console.log("최종 결과:", result);
}

// 콜백 함수를 중첩하여 만들어낸 콜백 지옥
addNumbers(5, 3, sum => {
    addNumbers(sum, 2, sumPlusTwo => {
        addNumbers(sumPlusTwo, 4, finalResult => {
            printResult(finalResult);
        });
    });
});

// -----------------------------------------------------------------

function addNumbers(a, b, callback) {
    let sum = a + b;
    callback(sum);
}

function printResult(result) {
    console.log("최종 결과:", result);
}

// 콜백 함수를 중첩하여 만들어낸 콜백 지옥
addNumbers(5, 3, sum => {
    addNumbers(sum, 2, sumPlusTwo => {
        addNumbers(sumPlusTwo, 4, finalResult => {
            addNumbers(finalResult, 5, sumPlusFive => {
                addNumbers(sumPlusFive, 6, finalResultPlusSix => {
                    addNumbers(finalResultPlusSix, 7, sumPlusSeven => {
                        addNumbers(sumPlusSeven, 8, finalResultPlusEight => {
                            addNumbers(finalResultPlusEight, 9, sumPlusNine => {
                                addNumbers(sumPlusNine, 10, finalResultPlusTen => {
                                    addNumbers(finalResultPlusTen, 11, sumPlusEleven => {
                                        addNumbers(sumPlusEleven, 12, finalResultPlusTwelve => {
                                            addNumbers(finalResultPlusTwelve, 13, sumPlusThirteen => {
                                                addNumbers(sumPlusThirteen, 14, finalResultPlusFourteen => {
                                                    addNumbers(finalResultPlusFourteen, 15, sumPlusFifteen => {
                                                        printResult(sumPlusFifteen);
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
