let initialvalue=0;

function increase (){
    initialvalue += 1;
    document.getElementById('current').innerText = `${initialvalue}`;

}
const btn1 =document.getElementById('inc');

btn1.addEventListener("click",()=>{
    increase();
})

function decrease (){
    initialvalue -= 1;
    document.getElementById('current').innerText = `${initialvalue}`;

}
document.getElementById('dec').onclick = decrease; 

function reset (){
    initialvalue = 0;
    document.getElementById('current').innerText = `${initialvalue}`;

}
document.getElementById('res').onclick = reset; 

reset();