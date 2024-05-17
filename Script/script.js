let fahrenheit = document.getElementsByTagName('input')[0]
let celsius = document.querySelector('.result')
let calc = document.querySelector('.calculate')
let clear = document.querySelector('.clear')

calc.addEventListener('click', tempConvert)

function tempConvert() {

    let result = parseFloat(fahrenheit.value - 32) * 5/9
    let roundResult = Math.round(result * 100) / 100

    try {
        if (fahrenheit.value == "") throw "empty"
        if (isNaN(result)) throw "not a number"

        celsius.innerText = roundResult
    } catch (error) {
        celsius.innerText = "Input is " + error
    }
}

clear.addEventListener('click', Reset)

function Reset() {
    celsius.innerText = ""
    fahrenheit.value = ""
}

