var input=document.querySelector('#input');
var h1=document.querySelector('#h1');
var h2=document.querySelector('#h2');
var h3=document.querySelector('#h3');
var output=document.querySelector('#output');
 
function firstFont()
{
    output.innerHTML=`<h1>${input.value}</h1>`;
}
function fontSecond()
{
   output.innerHTML=`<h2>${input.value}</h2>`;
}
function fontThird()
{
 output.innerHTML=`<h3>${input.value}</h2>`;
}

function showOp()
{
    output.innerText=input.value;
}
h1.addEventListener("click",firstFont);
h2.addEventListener("click",fontSecond);
h3.addEventListener("click",fontThird);
input.addEventListener("keyup",showOp);
        