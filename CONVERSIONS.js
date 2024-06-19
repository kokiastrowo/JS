let score = "33abc"// STRING 
console.log(typeof(score))
let val=Number(score) 
console.log(typeof(val))//NUMBER
console.log(val) //NOT A NUMBER
let r= null

console.log(typeof(r))//object
let v=Number(r) 
console.log(typeof(v))//NUMBER
console.log(v) //0
//FOR UNDEFINED AFTER CONVER TYPE IS NAN
// "33" 33
// "33abc" NAN
// TRUE 1
console.log(typeof(NaN)) // NUMBER 

let d=50
let g=Boolean(d)
console.log(g) // 1,>1=> TRUE 
//"" => FALSE
//"GFSGF" => TRUE
let y=45
let h=String(y)
console.log(typeof(h));//String
console.log(h);




