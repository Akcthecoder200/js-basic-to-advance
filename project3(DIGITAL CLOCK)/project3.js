const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')
setInterval(function(){
    let date=new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();//tolocalstring give date also....
},1000)
