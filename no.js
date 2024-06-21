const bal = new Number(100)
console.log(bal)
const r=bal.toString()
let i=bal.toFixed(2)// AT TWO DECIMAL PLACES ..
const p= 22.34456786
console.log(p.toPrecision(3));//Approx
const g=100000000000
console.log(g.toLocaleString('en-IN'))// OUTPUT GIVEN IN TERMS OF COMMAS en-IN MEANS INDIAN STANDARDS 
const le=Number.MAX_VALUE;
//***************maths in js *******************//
console.log(Math);//AN OBJECT GO AND INSPECT
console.log(Math.abs(-4)
)
console.log(Math.round(4.67))
console.log(Math.ceil(4.67))

console.log(Math.random())
console.log((Math.random()*10) + 1) // random no.s bet 1 to 9

const min = 10
const max= 20
// (Math.random()*(max-min+1)) + min;
console.log(Math.floor((Math.random()*(max-min+1))) + min);
//USE FLOOR OR ROUND ONLY 

/////////// date and time ////////////

let date=new Date(); //DATE IS A OBJECT
console.log(date);
console.log(date.toDateString());
console.log(date.toISOString);
console.log(date);
console.log(date);
console.log(date);
// let date2= new Date(2024,0,7); //Y M DAY MONTHS STARTS FROM 0 IN JS 
// let date2= new Date(2024,0,7,5,3);// 5 HR , 3 MIN , 0 SEC
let date2= new Date("2023-01-14")//BOTH ARE ALLOWED WHEN console.log(date2.toLocaleString()) IS USED
 
let date3= new Date("01-14-2023")
console.log(date2.toLocaleString())
let m=Date.now()//STATIC METHOD HOW MANY MILISECS SINCE JAN 1,1970
console.log(m);//1718979244277 milisecs from 2023-01-14
console.log(date3.getTime());//USED TO COMPARE IN BIG PROJECTS //1673654400000 milliseconds have passed between January 1, 1970, and January 14, 2023.
console.log(Math.floor(Date.now()/1000));// CONVERSION IN SECS 
date3.toLocaleString('default',{
    weekday:"long",
    timeZone:AbortController
})



