//dates

let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString())//sat jun 01 2024
console.log(mydate.toLocaleDateString());//1/6/2024
console.log(typeof mydate);//object


let mydatecreated=new Date(24,1,2024)
let mydatecreated2=new Date(4,1,2024,5,3,1)
console.log(mydatecreated.toDateString())//only give date
console.log(mydatecreated2.toLocaleString())//give date with time
let mydatecreated3=new Date("2024-01-24")//yyyy-mm-dd
console.log(mydatecreated3.toLocaleString());
let mydatecreated4=new Date("01-24-2024")//mm-dd-yyyy
console.log(mydatecreated4.toLocaleString());


//time
let mytimestamp=Date.now()
console.log(mytimestamp)//milisecond time
console.log(mydatecreated.getTime());//milisecond time
console.log(Math.floor(Date.now()/1000));//convert to second

let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth());//5 n0t 6 as start from 0 also other operation you can try like getday year etc.
//important thing
newdate.toLocaleString('default',{
    weekday:"short"
})//we can customise thing more using this in { use ctr+space to get it}
