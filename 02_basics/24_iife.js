//immediately invoke function expressions(IIFE)

// named iife normal syntax ()()
(function chai(){
    console.log(`Db connected`);
})();//for two consecutiove iife semicolon is must bw them 

//normal iife
( (name)=>{
    console.log(`db connected two ${name}`);
})("arvind")//second perenthesis symply for execution where we can pass parameter or arguments