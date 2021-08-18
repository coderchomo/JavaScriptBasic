function exchange(){
let number=document.getElementById("number").value;
number=parseFloat(number);
let money=document.getElementById("money").value;
let country=document.getElementById("country").value;
if(country=="VND" && money=="VND"){
    document.getElementById("tommy").innerText=number;
}
if(country=="VND" && money=="USD"){
    document.getElementById("tommy").innerText=number*0.00004347826;
    }
if(country=="USD" && money=="USD"){
    document.getElementById("tommy").innerText=number;
}
if(country=="USD" && money=="VND"){
    document.getElementById("tommy").innerText=number*23000;
}
}