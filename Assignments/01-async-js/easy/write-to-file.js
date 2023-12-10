// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs')

let data = fs.readFileSync('cohort.txt', 'utf-8')
console.log(data);

let content = "I am writing this to check write file method of FS"
fs.writeFile('cohort.txt', content, (err) => {
    if (!err) {
        console.log("Wrote successfully");
        console.log(fs.readFileSync('cohort.txt', 'utf-8'))
    }
})
console.log(fs.readFileSync('cohort.txt', 'utf-8'))

console.log('out of fs.writefile');

