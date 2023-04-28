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
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");
     // check to see if user inputs were invalid
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "One or more of your input values are invalid";
        return; // exit the addBtnClicked function
    }
    const result = number1Field + number2Field;
    document.getElementById("answerField").value = result;

    // clear any previous error message
    messagePara.innerHTML = "";
}

function onSubtractBtnClicked(){
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");
     // check to see if user inputs were invalid
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "One or more of your input values are invalid";
        return; // exit the addBtnClicked function
    }
    const result = number1Field - number2Field;
    document.getElementById("answerField").value = result;

    // clear any previous error message
    messagePara.innerHTML = "";
}

function onMultiplyBtnClicked(){
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");
     // check to see if user inputs were invalid
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "One or more of your input values are invalid";
        return; // exit the addBtnClicked function
    }
    const result = number1Field * number2Field;
    document.getElementById("answerField").value = result;
    // clear any previous error message
    messagePara.innerHTML = "";
}

function onDivideBtnClicked(){
    const number1Field = Number(document.getElementById("number1Field").value);
    const number2Field = Number(document.getElementById("number2Field").value);
    const messagePara = document.getElementById("messagePara");
     // check to see if user inputs were invalid
    if (isNaN(number1Field) || isNaN(number2Field)) {
        messagePara.innerHTML = "One or more of your input values are invalid";
        return; // exit the addBtnClicked function
    }
    const result = number1Field / number2Field;
    document.getElementById("answerField").value = result;
    // clear any previous error message
    messagePara.innerHTML = "";
}
