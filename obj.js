//OBJECTS 
//CONSRUCTOR => SINGELTON
//OBJECT LITERALS
const m=Symbol("key1");

const u={
    name:"swra",
    [m]:"mykey1",// FOR SYMBOL USE []  else undefined
    age:23,
    location:"dsg"
}
console.log(u.location);// SIMILAR TO => u.location
console.log(u[m])// ALWAYS USE [] FOR SYMBL ACCESS ALSO ****
u.location="pune";
// Object.freeze(u);// no more changes allowed but also no error given or thrown
u.gr=function(){
    console.log(`hello ${this.name}`);
}
console.log(u.gr());  
// hello swra
// undefined


// const tiu= new Object(); // == const tiu={};
// console.log(tiu);// => {}
const tiu={};
tiu.id="67";
tiu.name="swara";
console.log(tiu); // { id: '67', name: 'swara' }
const re={
    email:"hgfhf",
    fn:{
        user:{
         fuln:"dfgdc",
         last:"jfghd"
        }

    }
}
console.log(re);//{ email: 'hgfhf', fn: { user: { fuln: 'dfgdc', last: 'jfghd' } } }
console.log(re.fn?.user?.fuln);
const o1={1:"a",2:"b"};
const o2={3:"a",4:"b"};
// const o3={o1,o2};
// console.log(o3);//{ o1: { '1': 'a', '2': 'b' }, o2: { '3': 'a', '4': 'b' } }
const o3=Object.assign({},o1,o2);
console.log(o3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//o3 because of {} in syntax it adds both of them ..
const o4 ={...o1,...o2}// ... is called spread operator.. == const o3=Object.assign({},o1,o2);
const r=[
    {
     n:"nfd"
    },
    {
     n:"hyuy"
    },
    {
     n:"popop"
    }
]
console.log(r[1].n)
console.log(Object.keys(tiu))
console.log(Object.values(tiu))
// [ 'id', 'name' ]
// [ '67', 'swara' ]
console.log(tiu.hasOwnProperty('hasLogged'));// false

const obj={
   a:"ffsdgfxs skd",
   b:"djgsydg lop",
   c:1
}
const {b:p}=obj;// {which val} = which object :diff name ==>> for direct access

//DESTRUCT OF OBJ 
console.log(b);





