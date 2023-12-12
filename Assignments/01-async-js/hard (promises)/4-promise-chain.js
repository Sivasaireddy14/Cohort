/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    return waitOneSecond(a).then(() => {
    }).then(() => {
        return waitTwoSecond(b).then(() => {
        }).then(() => {
            return waitThreeSecond(c).then(() => {
            }).then(() => {
                let d1 = new Date()
                return d1 - date
            })
        })
    })
}



module.exports = calculateTime