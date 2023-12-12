/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, n * 1000);
    })
}

function waitTwoSecond(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, n * 1000);
    })
}

function waitThreeSecond(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, n * 1000);
    })
}

function calculateTime(a, b, c) {
    let date = new Date()
    return Promise.all([waitOneSecond(a), waitTwoSecond(b), waitThreeSecond(c)]).then((values) => {
        let currentDate = new Date()
        return currentDate-date
    })
}
module.exports=calculateTime