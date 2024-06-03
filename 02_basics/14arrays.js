//arrays

// const myarr=[0,1,2,3,4,5,true,"arvind"]
const myarr=[0,1,2,3,4,5]
//shallow copy means refrence and deep copy means normal copy ...arrays operate by shallow copy(refrence)
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
const myheros=["shaktiman","ironman"]
// console.log(myheros[1]);
const myh1=myheros
myh1[1]="spiderman"
console.log(myheros);
// myheros[1]="spiderman"
// console.log(myheros);

//array method
myarr.push(7)//same pop operation
myarr.unshift(8)//adding 8 as first element by shifting all element by left
console.log(myarr);
myarr.shift()//remove first element 
console.log(myarr);

console.log(myarr.includes(9));//check that 9 present in  array or not if not give false
console.log(myarr.indexOf(4));//give index of element 4
const newarr=myarr.join()//join convert it datatype into string
console.log(newarr);
console.log(typeof newarr);//string

//slice and splice
const myn1=myarr.slice(1,3)//3 index  not include
console.log("A",myn1);
console.log(myarr);
const myn2=myarr.splice(1,3)//3 index include
console.log(("B",myn2));//[1,2,3]
console.log(myarr);//[0,4,5,7] here splice operation cut that portion from initial array by in slice operation initial array does'nt get affected..