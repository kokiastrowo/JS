//ARRAY
const l=[1,"dhgc",true];
//ZERO BASED INDEXING
//ARRAYS IN JAVASCRIPT CREATE (COPY OPRNS) SHALLOW COPY CHANGES IN COPY CHANGE ARRAY : OBJECT :HEAP

l.push(5);
l.pop();//last vAL REMOVED
l.unshift(7)//added at start but not optimized
l.unshift() //removed the element at start
console.log(l.includes(1))
//indexOf
const k=l.join()// BINDS AND CHANGES TO STRING
console.log(k);
//SLICE SPLICE
const l1=[1,2,3,4,5];
const sl=l1.slice(1,3);
console.log(`slice: ${sl}`);
console.log(l1)
const sp=l1.splice(1,3);
console.log(`splice: ${sp}`);
console.log(l1);
//**** 1)SPLICE CHANGES THE ARRAY AND REMOVES THAT PART OF ARRAY 2)SPLICE INCLUDES LAST NO. ALWAYS 



