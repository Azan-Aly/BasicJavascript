const h1 = document.getElementById("myh1")

const increase = document.getElementById("increase")
const reset = document.getElementById("reset")
const decrease = document.getElementById("decrease")
let count = 0;


increase.onclick = ()=>{
    count++;
    h1.textContent = count;
}
decrease.onclick = ()=>{
    count--;
    h1.textContent = count;
}
reset.onclick = ()=>{
    count=0;
    h1.textContent = count;
}