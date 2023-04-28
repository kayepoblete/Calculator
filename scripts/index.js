"use strict";

window.onload = init;

function init(){
    const addBtn = document.getElementById("addBtn");
    const subBtn = document.getElementById("subBtn");
    const multBtn = document.getElementById("multBtn");
    const divBtn = document.getElementById("divBtn");

    addBtn.onclick = onAddBtnClicked;
    subBtn.onclick = onSubtractBtnClicked;
    multBtn.onclick = onMultiplyBtnClicked;
    divBtn.onclick = onDivideBtnClicked;
}

function onAddBtnClicked(){
    const number1Field = document.getElementById("number1Field").value;
    const number2Field = document.getElementById("number2Field").value;

    const result = Number(number1Field) + Number(number2Field);
    document.getElementById("answerField").value = result;
}

function onSubtractBtnClicked(){
    const number1Field = document.getElementById("number1Field").value;
    const number2Field = document.getElementById("number2Field").value;

    const result = Number(number1Field) - Number(number2Field);
    document.getElementById("answerField").value = result;
}

function onMultiplyBtnClicked(){
    const number1Field = document.getElementById("number1Field").value;
    const number2Field = document.getElementById("number2Field").value;

    const result = Number(number1Field) * Number(number2Field);
    document.getElementById("answerField").value = result;
}

function onDivideBtnClicked(){
    const number1Field = document.getElementById("number1Field").value;
    const number2Field = document.getElementById("number2Field").value;

    const result = Number(number1Field) / Number(number2Field);
    document.getElementById("answerField").value = result;
}
