//form
const form = document.getElementById('form');
//name
const inputName = document.getElementById('inputName');
const inputLabelName = document.getElementById('labelName')
//random
const inputRandomNumber = document.getElementById('inputRandom');
//button
const btnSubmit = document.getElementById('inputboton')
//RegExp
const regex = new RegExp(/^[A-Z]+$/i);

//eventos
window.addEventListener('load', () => {
    getRandomNumber();
    onlyText(inputName);
})

//funciones
function getRandomNumber() {
    let randomNumber = Math.random().toString().slice(2, 8);
    inputRandomNumber.value = randomNumber;
}

function onlyText(input) {
    input.addEventListener('keyup', (e) => {
        let value = e.target.value;
        //usando una expresion regular
        if(!(regex.test(value))){
            document.getElementById("inputName").focus();
            document.getElementById("inputName").style.borderColor = "red";
            btnSubmit.setAttribute('disabled', true);
            btnSubmit.style.background = "red";
        }
        else{
            document.getElementById("inputName").style.borderColor = "green";
            btnSubmit.style.background = "green";
        }
    })
}
