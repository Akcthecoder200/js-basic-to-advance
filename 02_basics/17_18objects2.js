// const tinderuser=new object() //singleton object
 const tinderuser={}//litral object or non singleton

tinderuser.name="arvind"
tinderuser.age=21
tinderuser.isloggedin=false
//nested objects
const regularuser={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
const obj3 = { obj1, obj2 }
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj5 = Object.assign({}, obj1, obj2, obj4)//here target is {} and others is source*****
console.log(obj5);
const obj6=Object.assign(obj1,obj2,obj4)//here target is obj1 and other is source
console.log(obj6);
console.log(obj1);//here as above obj1 is target so obj1 value equal to obj6

const obj7={...obj2,...obj4}
console.log(obj7);//good method

//arrays of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email//for accessing
console.log(tinderuser);
//to gets keys in arrays

console.log(Object.keys(tinderuser));//[ 'name', 'age', 'isloggedin' ]
console.log(Object.values(tinderuser));//[ 'arvind', 21, false ]
console.log(Object.entries(tinderuser));//[ [ 'name', 'arvind' ], [ 'age', 21 ], [ 'isloggedin', false ] ]
console.log(tinderuser.hasOwnProperty('isLoggedIn'));//check that isloggedIn exist or not give true false


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//object destructure
const {courseInstructor:onlyinstructor}=course;//change name of courseinstructor to onlyinstructor
console.log(onlyinstructor);
//
//api that we are getting may be in form of object or arrays or many thing we can get understand any api on apiformatting on gogle...****
//api is in jason format which is same as object format..