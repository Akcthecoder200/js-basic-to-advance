fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then(function(data){
    console.log(data);
}).catch((error)=> console.log(error));

//fetch result exucute before other other promises as its process goinf through prriority queue and then to js call stack...***