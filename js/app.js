

// document.querySelector('button').addEventListener('click', function(){

    // let red = Math.floor( Math.random()*255);
    // let green = Math.floor( Math.random()*255);
    // let blue = Math.floor( Math.random()*255);

   // console.log(red,green,blue);
// })

setInterval(function(){
      
    let color1 = Math.floor( Math.random()*255);
    let color2 = Math.floor( Math.random()*255);
    let color3 = Math.floor( Math.random()*255);

    document.body.style.background = `linear-gradient(rgb(${color2},${color3},${color1}),rgb(${color3},${color1},${color2}))`;
},1000)