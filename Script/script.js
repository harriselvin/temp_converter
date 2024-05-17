let fahrenheit = document.getElementsByTagName('input')[0]
let celsius = document.querySelector('.result')
let calc = document.querySelector('.calculate')
let clear = document.querySelector('.clear')

calc.addEventListener('click', tempConvert)

function tempConvert() {

    let result = parseFloat(fahrenheit.value - 32/1.8)
    
    if (fahrenheit.value = (typeof Number)) {
        celsius.innerText = result
    } else {
        celsius.innerText = "Please Enter Number"
    }
}

clear.addEventListener('click', Reset)

function Reset() {
    celsius.innerText = ""
    fahrenheit.value = ""
}

