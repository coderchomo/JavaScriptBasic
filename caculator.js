let number1=document.getElementById("number1").value;
number1=parseInt(number1);
let number2=document.getElementById("number2").value;
number2=parseInt(number2);
function cong(){
    let number1=document.getElementById("number1").value;
    number1=parseInt(number1);
    let number2=document.getElementById("number2").value;
    number2=parseInt(number2);
    let result=number1+number2;
    document.getElementById("result").innerText=result;
}
function tru(){
    let number1=document.getElementById("number1").value;
    number1=parseInt(number1);
    let number2=document.getElementById("number2").value;
    number2=parseInt(number2);
    let result=number1-number2;
    document.getElementById("result").innerText=result;
}
function nhan(){
    let number1=document.getElementById("number1").value;
    number1=parseInt(number1);
    let number2=document.getElementById("number2").value;
    number2=parseInt(number2);
    let result=number1*number2;
    document.getElementById("result").innerText=result;


}
function chia(){
    let number1=document.getElementById("number1").value;
    number1=parseInt(number1);
    let number2=document.getElementById("number2").value;
    number2=parseInt(number2);
    let result=number1/number2;
    document.getElementById("result").innerText=result;
}
