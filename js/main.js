const subCheckBox = document.getElementById("subCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const btn = document.getElementById("btn");
const subPara = document.getElementById("subPara");
const cardInfo = document.getElementById("cardInfo");


btn.onclick = function(){
    if(subCheckBox.checked){
        subPara.textContent = `You are subbed`;
    }
    if(visaBtn.checked){
        cardInfo.textContent = `You are using Visa`;
    }
    else if(masterCardBtn.checked){
        cardInfo.textContent = `You are using MasterCard`;
    }
    else if(paypalBtn.checked){
        cardInfo.textContent = `You  are using PayPal`;
    }
}