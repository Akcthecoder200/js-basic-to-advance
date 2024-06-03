//this in object

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
            
    }

}
//user.welcomeMessage()//
user.username = "sam"
user.welcomeMessage()
console.log(this);//{} empty but in console (inspect) its gives window(browser objects) and many things



//this in functions


//  const chai = function () {
//      let username = "hitesh"
//      console.log(this.username);
//  }
//  chai()//give undefined as we cant use this in  functions..


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// } //give same result undefined as previous ...


//arrow function

// const chai=()=>{
//     let username="hitesh"
//     console.log(this)
// }
// chai()//{}

// const addtwo=(num1,num2)=>{
//      return num1+num2
// }
//here if in curly bracket return must used for output
 

//*****
//const addtwo=(num1,num2)=>(num1+num2)//normal bracket then no need of return...most important concept///
const addTwo = (num1, num2) => ({username: "hitesh"})//as object in perenthesis 


console.log(addTwo(3, 4))//{ username: 'hitesh' }