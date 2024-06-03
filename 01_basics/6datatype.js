//primitive 
//7type :string,number,boolean,null,undefined,symbol,BigInt

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)//false


//refrence(non primitive):array,objects,functions
//typeof of non primitive datatype is function or object function
//symbol have symbol typeof
const heros=["arvind","suresh"]
let myobj={
    name:"arvind",
    agr:"21"
}
const myfunction=function(){
    console.log("hello world")
}