var input=document.querySelector('#input');
var btnOne=document.querySelector('#h1');
var btnTwo=document.querySelector('#h2');
var btnThree=document.querySelector('#h3');
var output=document.querySelector('#output');

input.addEventListener("keyup",()=>
{
    output.innerHTML=input.value;
})
h1.addEventListener("click",()=>{
output.innerHTML=`<h1>${input.value}</h1>`;
})
h2.addEventListener("click",()=>{
    output.innerHTML=`<h2>${input.value}</h2>`;
    })
    h3.addEventListener("click",()=>{
        output.innerHTML=`<h3>${input.value}</h3>`;
        })
        