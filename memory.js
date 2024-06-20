//STACK => PRIMITIVE 
//HEAP => NON PRIM OBJECTS 
//whenever from stack then the copy is taken 
let my="ggvcvcv";
let an=my
an="dfr"
console.log(an)//dfr
console.log(my)//ggvcvcv
//whenever from heap then taken reference
let u={
    email:"hvf.com",
    upi:"hhdwd"
}
let v=u// directly pointing 
v.email="gfgewfdgve"
console.log(u.email)
