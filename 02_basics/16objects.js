//singleton form by constructor not by litrals
//two type objects litrals and object constructor

//object litrals

 //taking symbol as key
 const mysym=Symbol("key1")
 const jsuser={
    name:"arvind",
    age: 21,
    [mysym]:"mykey1",//here taking mysym in bracket it syntax of it..
    isloggedin:false,
    location:"jaipur",
    email:"akchoudhary2411@gmail.com"


 }
 //accessing its element

 console.log((jsuser.email));
 console.log(jsuser['email']); //take key as in commas
 console.log(jsuser[mysym]);//same for accessing it syntax ..
 //change values
 jsuser.email="ram123@emial.com"
//  Object.freeze(jsuser)//it freeze the object jsuser after this no change applied..
 jsuser.email="sur34@emil.com"
 console.log(jsuser);//email: 'ram123@emial.com' and all other..

 //value as function
 jsuser.greeting=function(){
    console.log("hello everyone how are you");
 }
 console.log(jsuser.greeting);//give function(anonymous)
 console.log(jsuser.greeting());

 jsuser.greeting2=function(){
    console.log(`hello everyone how are you,${this.name}`);
 }
 console.log(jsuser.greeting2());