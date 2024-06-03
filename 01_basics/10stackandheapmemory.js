//stack memory(primitive datatype) and heap memory(non primitive)
//stack give copy of that data
let myyoutubename="hiteshchoudharydotcom"
let anothername=myyoutubename
console.log(myyoutubename)
console.log(anothername)

//heap give reference of that data if anyone change initial also change

let userone={
    email:"user@google.com",
    upi:"user@ybl"
}
let usertwo=userone;
usertwo.email="akchoudhary2411@gmail.com"
console.log(usertwo.email);//give akchoudhary2411@gmail.com
console.log(userone.email);//also give same as above as we change the reference 