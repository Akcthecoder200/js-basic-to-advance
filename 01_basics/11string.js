const name="arvind"
const count=50
// console.log(name+count+"value") old ways to concate
// modern
console.log(`hello my name is ${name} and count is ${count}`)//nice way
// declarations of string and method to manupulate string
const gamename=new String('hitesh-hc-choudhary');//check in console give many operations and also give characters present at each index
console.log(gamename[0])
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('t'))
const newstring=gamename.substring(0,4)
console.log(newstring)
const anotherstring=gamename.slice(-8,4);//we can also give negative value
console.log(anotherstring);
const thirdstring="    ram kumar  "
console.log(thirdstring.trim());
const url="http://hitesh.com/hitrsh%230choudhary"
console.log(url.replace('%230','-'))
//convert string to array based on any thing
console.log(gamename.split('-'))//anything search on mdn