/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
return new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve()
}, seconds);
for(let i=0;i<1000;i++){

}
})
}

module.exports=sleep