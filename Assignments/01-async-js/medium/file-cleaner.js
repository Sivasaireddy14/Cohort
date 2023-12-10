// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// hello     world    my    name   is       raman
// After the program runs, the output should be
// hello world my name is raman

const fs=require('fs')

fs.readFile('file.txt','utf-8',(err,data)=>{
    if(!err){
        let str=data
        str=str.replaceAll(/(\s+)/g," ")
        str=str.trim()
        fs.writeFile('file.txt',str,err=>{
            if(!err){
                console.log("Go, check the file, the extra spaces were removed");
            }
        })
    }
})
