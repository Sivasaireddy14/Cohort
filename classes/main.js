console.log("Hello World");

const greet=(firstName,lastName)=>{
    console.log("Hello "+firstName+" "+lastName);
}

const greetByGender=(gender)=>{
console.log(gender==='male'?"Hi Sir":"Hi Mam");
}

const printBetween=(first,last)=>{
    for(let i=first;i<=last;i++){
        console.log(i);
    }
}


const printEven=(first,last)=>{
    for(let i=first;i<=last;i++){
        if(i%2===0){
        console.log(i);
        }
    }
}



greet("Siva","Sai")

greetByGender("dsjdhd")

printBetween(1,10)

printEven(1,10)