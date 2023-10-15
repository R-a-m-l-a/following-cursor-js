var main=document.querySelector("#main");
var crsr=document.querySelector(".cursor");
main.addEventListener("mousemove",function(axis) 
{  //left prop below works only with position which we have added in css
    crsr.style.left=axis.x+"px"; //for allowing cursor move in x-axis,
    crsr.style.top=axis.y+"px";//for allowing cursor move in y-axis
})