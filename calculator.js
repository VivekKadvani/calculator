document.getElementById("c_btn_1").addEventListener("click",()=>{add1(1)})
document.getElementById("c_btn_2").addEventListener("click",()=>{add1(2)})
document.getElementById("c_btn_3").addEventListener("click",()=>{add1(3)})
document.getElementById("c_btn_4").addEventListener("click",()=>{add1(4)})
document.getElementById("c_btn_5").addEventListener("click",()=>{add1(5)})
document.getElementById("c_btn_6").addEventListener("click",()=>{add1(6)})
document.getElementById("c_btn_7").addEventListener("click",()=>{add1(7)})
document.getElementById("c_btn_8").addEventListener("click",()=>{add1(8)})
document.getElementById("c_btn_9").addEventListener("click",()=>{add1(9)})
document.getElementById("c_btn_0").addEventListener("click",()=>{add1(0)})

document.getElementById("c_btn_C").addEventListener("click",clear)

document.getElementById("c_btn_plus").addEventListener("click",()=>{
    a=document.getElementById("c_btn_plus").value; 
})

function add1(n){
    document.getElementById("c_display").innerHTML+=n;
}


function clear()
{
    document.getElementById("c_display").innerHTML="";
}