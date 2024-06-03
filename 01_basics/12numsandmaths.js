// numbers
const balance=new Number(100)
console.log(balance);
console.log(balance.toString().length)
console.log(balance.toFixed(2))//100.00
const othernumber=123.654
console.log(othernumber.toPrecision(4));//123.7
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'))//give commas bw zeros in indian style default us style
//check different operation in console by using number.


//maths and random
 console.log(Math.abs(-6))//same as abs operation we can do #round,#ceil,#floor,#min and #max random
 console.log(Math.random());//any random value bw 0 and 1 
 console.log((Math.random()*10) + 1)
 console.log(Math.floor(Math.random()*10) + 1)

 const min=10
 const max=20
 console.log(Math.floor(Math.random()*(max-min+1))+min)
