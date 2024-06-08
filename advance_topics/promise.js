//1
const promiseone=new Promise(function(resolve,reject){
       //do an async task
       //bd call ,cryptography,network..
       setTimeout(function(){
        console.log('async task is completed');
        resolve()
       },1000)
})
promiseone.then(function () {
    console.log('promise consumed');
})
//2
const promisetwo=new Promise(function(reolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        reolve()
    },1000)
    
})
promisetwo.then(function(){
    console.log('async 2 promise consumed');
})

//3
const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"arvind",email:"akchoudhary2411@gmail.com"})

    },1000)
})
promisethree.then(function(resolve){
   console.log(resolve);
})
//4
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if(!error){
            resolve({username:"arvind",email:"akchoudhary2411@gmail.com"})
        }
        else{
            reject("ERROR:someting went wrong")
        }
    },1000)
})
promisefour.then(function(user){
    console.log(user);
    //console.log(user.email);
    return user.email

}).then(function(email){
    console.log(email);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolved or rejected");
})
///5 using async await
const details={username: "javascript", password: "123"}
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve(details)
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// async function getallusers(){
//     try{
//         const response=await fetch(null)

//         const data=await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:",error);
//     }
// }
// getallusers()

