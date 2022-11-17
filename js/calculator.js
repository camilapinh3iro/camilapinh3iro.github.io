let numberofClick = 0;
let numberOneCreated = false;
let operationSelected = null;
let valueNumber1, valueNumber2;

// função para exibir número selecionado
function updateDisplay(buttonNumber) {
    if (numberofClick == 0) {
        display.innerText = buttonNumber;
    } else {
        display.innerText += buttonNumber;
    }

    numberofClick++;
}

//Escutador de eventos do botão C da calculadora
clearButton.addEventListener("click", deleteDisplay);

//função para limpar os valores/display
function deleteDisplay() {
    display.innerText = 0;
    numberofClick = 0;
    numberOneCreated = false;
}

//função soma
plusButton.addEventListener("click", sum)
function sum() {
    valueNumber1 = +display.innerText;

    numberOneCreated = true;
    display.innerText = 0;
    numberofClick = 0;
    operationSelected = "sum";

}

// subtração
minusButton.addEventListener("click", subtraction);
function subtraction() {
    valueNumber1 = +display.innerText;

    numberOneCreated = true;
    display.innerText = 0;
    numberofClick = 0;
    operationSelected = "subtraction";
}

timesButton.addEventListener("click", multiplication);
function multiplication() {
    valueNumber1 = +display.innerText;

    numberOneCreated = true;
    display.innerText = 0;
    numberofClick = 0;
    operationSelected = "multiplication";
}

dividedButton.addEventListener("click", division);
function division() {
    valueNumber1 = +display.innerText;

    numberOneCreated = true;
    display.innerText = 0;
    numberofClick = 0;
    operationSelected = "division";
}

//função resultado
resultButton.addEventListener("click", result);
function result() {
    if (numberOneCreated == true) {
        valueNumber2 = +display.innerText;

        if (operationSelected == "sum") {
            display.innerText = valueNumber1 + valueNumber2;
        } else if(operationSelected == "subtraction"){
            display.innerText = valueNumber1 - valueNumber2;
        } else if(operationSelected == "multiplication"){
            display.innerText = valueNumber1 * valueNumber2;
        } else if(operationSelected == "division"){
            display.innerText = valueNumber1 / valueNumber2;
        } 

    }
}

