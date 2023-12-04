console.log("Hello World");

const greet = (firstName, lastName) => {
    console.log("Hello " + firstName + " " + lastName);
}

const greetByGender = (gender) => {
    console.log(gender === 'male' ? "Hi Sir" : "Hi Mam");
}

const printBetween = (first, last) => {
    for (let i = first; i <= last; i++) {
        console.log(i);
    }
}

const printEven = (first, last) => {
    for (let i = first; i <= last; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

const getBig = (arr) => {
    let big = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > big) {
            big = arr[i]
        }
    }
    return big
}

const reverseArr = (arr) => {
    let revArr = []
    let i = 0, j = arr.length - 1
    while (j >= 0) {
        revArr[i] = arr[j]
        j--
        i++
    }
    return revArr
}

const getMales = (members) => {
    for (let i = 0; i < members.length; i++) {
        if (members[i].gender === "male") {
            console.log(members[i].firstName);
        }
    }
}

const sum=(a,b,clbk)=>{
    clbk(a+b,displayPassive)
}

const displaySum=(result,clbk)=>{
console.log("result is : "+ result);
clbk(result)
}

const displayPassive=(result)=>{
    console.log("Sum of the given two integers is: "+result);
}

const counter=(secs)=>{
    for(let i=secs;i>=0;i--){
        console.log(i);
    }
}

var h=0,m=0,s=0
const clock=()=>{
    let hh,mm,ss
    s+=1
    if(s>59){
        s=0
        m+=1
    }
    if(m>59){
        m=0
        h+=1
    }
    if(h>23){
        h=0
    }
    if(s<10){ss="0"+s}else{ss=s}
    if(m<10){mm="0"+m}else{mm=m}
    if(h<10){hh="0"+h}else{hh=h}
    console.log(hh+":"+mm+":"+ss);
}

greet("Siva", "Sai")
greetByGender("dsjdhd")
printBetween(1, 10)
printEven(1, 10)
console.log(getBig([5, 9, 5, 6, 7, 4]))
console.log(reverseArr([5, 9, 5, 6, 7, 4]));

const members = [{ firstName: "John", lastName: "wick", gender: "male" },
{ firstName: "Roman", lastName: "Reigns", gender: "male" },
{ firstName: "Nikki", lastName: "James", gender: "female" },
{ firstName: "David", lastName: "Warner", gender: "male" }
]

getMales(members)
sum(2,6,displaySum)
counter(30)
setInterval(clock,1000)