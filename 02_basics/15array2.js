const marvel_heros=["ironman","captain","blackwidow"]
const dc_heros=["flash","batman","superman"]
// operation by which we join two arrays

//1
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);//take dc_heros as element
//2
const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros);
//3 most efficient ways mostly used
const all_heros2=[...marvel_heros,...dc_heros]
console.log(all_heros2);

//flat operation for remove inside arrays at a certain level or may use infinity to remove all inside array

const another_array=[1,2,3,[4,5,6],7,[2,[4,5,6]]]
console.log(another_array.flat(Infinity));//in place of infinity we can write a number at which level we want to flat

//convert string to array ##isarray,#from,#of operation
console.log(Array.isArray("arvind"));


console.log((Array.from("suresh")));//give [ 's', 'u', 'r', 'e', 's', 'h' ]
console.log((Array.from({name:"suresh"})))//give [] empty array as it cannot convert this******


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
