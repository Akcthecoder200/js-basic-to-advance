

fetch('https://api.imgflip.com/get_memes')
.then(function(initial){
    return initial.json()
}).then(function(response){
     let img=response.data.memes[1].url
     let imgtag=document.querySelector('#myimg')
     imgtag.src=`${img}`
    console.log(img);
})
.catch(function (error) {
    console.log(error);
})


