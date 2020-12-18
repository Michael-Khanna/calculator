function add(num1, num2){
  return num1 + num2
}
function subtract(num1, num2){
  return num1 - num2
}
function multiply(num1, num2){
  return num1 * num2
}
function divide(num1, num2){
  return num1 / num2
}
function operate(operator, num1, num2){
  if(operator == `+`){
    return add(num1, num2)
  } else if (operator == `-`){
    return subtract(num1, num2)
  } else if (operator == `x`){
    return multiply(num1, num2)
  } else if (operator == `/`){
    return divide(num1, num2)
  }
}

let input1 = ``
let input2 = ``
let inputOPP = ``
let decimal1 = false
let decimal2 = false

let display = document.querySelector(`#display`)
let one = document.querySelector(`#one`)
let two = document.querySelector(`#two`)
let three = document.querySelector(`#three`)
let four = document.querySelector(`#four`)
let five = document.querySelector(`#five`)
let six = document.querySelector(`#six`)
let seven = document.querySelector(`#seven`)
let eight = document.querySelector(`#eight`)
let nine = document.querySelector(`#nine`)
let zero = document.querySelector(`#zero`)
let addSign = document.querySelector(`#add`)
let subtractSign = document.querySelector(`#subtract`)
let multiplySign = document.querySelector(`#multiply`)
let divideSign = document.querySelector(`#divide`)
let equalsSign = document.querySelector(`#equals`)
let clearSign = document.querySelector(`#clear`)
let decimal = document.querySelector(`#decimal`)
let backspace = document.querySelector(`#backspace`)

one.addEventListener(`click`, function(){memory(1)})
two.addEventListener(`click`, function(){memory(2)})
three.addEventListener(`click`, function(){memory(3)})
four.addEventListener(`click`, function(){memory(4)})
five.addEventListener(`click`, function(){memory(5)})
six.addEventListener(`click`, function(){memory(6)})
seven.addEventListener(`click`, function(){memory(7)})
eight.addEventListener(`click`, function(){memory(8)})
nine.addEventListener(`click`, function(){memory(9)})
zero.addEventListener(`click`, function(){memory(0)})
addSign.addEventListener(`click`, function(){memory(`+`)})
subtractSign.addEventListener(`click`, function(){memory(`-`)})
multiplySign.addEventListener(`click`, function(){memory(`x`)})
divideSign.addEventListener(`click`, function(){memory(`/`)})
equalsSign.addEventListener(`click`, function(){memory(`=`)})
clearSign.addEventListener(`click`, function(){memory(`ac`)})
decimal.addEventListener(`click`, function(){memory(`.`)})
backspace.addEventListener(`click`, function(){memory(`c`)})

function memory(input){
  if((!(input == `.`) || (input == `.` && decimal1 == false)) && inputOPP == `` && !(input == `c`) && !(input == `ac`)){
    if(input == `.`){
      decimal1 = true
    }
    if (input1 == `` && !(input == `+` || input == `-` || input == `x` || input == `/` || input == `=` || input == `ac` || input == `c`)){
      input1 += `${input}`
      display.textContent = ` ${input}`
    } else if (inputOPP == ``&& !(input == `+` || input == `-` || input == `x` || input == `/` || input == `=` || input == `ac` || input == `c`)){
      input1 += input
      display.textContent += `${input}`
    } else if (!(display.textContent == ``) && (input == `+` || input == `-` || input == `x` || input == `/` || input == `c`)){
      input1 = display.textContent
      inputOPP += `${input}`
      display.textContent += ` ${input}`
    }
  }
  if((!(input == `.`) || (input == `.` && decimal2 == false)) && !(input1 == ``) && !(inputOPP == ``) && !(input == `c`)){
    if(input == `.`){
      decimal2 = true
    }
    if ((input2 == ``)  && !(input == `+` || input == `-` || input == `x` || input == `/` || input == `=` || input == `ac` || input == `c`)){
      input2 += input
      display.textContent += ` ${input}`
    } else if (!(input2 == ``) && !(input == `+` || input == `-` || input == `x` || input == `/` || input == `=` || input == `ac` || input == `c`)){
      input2 += input
      display.textContent += `${input}`
    }
  }
  if(input == `c`){
    if(input1 == ``){
      display.textContent = `0`
    } else if(input1.length == 1 && inputOPP == `` && input2 == ``){
      input1 = `0`;
      display.textContent = input1
    } else if (inputOPP == `` && input2 == ``){
      input1 = input1.slice(0, (input1.length - 1))
      display.textContent = input1
    } else if (!(inputOPP == ``) && input2 == ``){
      inputOPP = ``;
      display.textContent = `${input1}`
    } else if (!(inputOPP == `` && input1 == `` && !(input2 == ``))){
      input2 = input2.slice(0, (input2.length - 1))
      display.textContent = `${input1} ${inputOPP} ${input2}`
    }
  }
  if(input == `ac`){
    display.textContent = ``
    input1 = ``
    input2 = ``
    inputOPP = ``
    decimal1 = false
    decimal2 = false
  }
  if(input == `=` && input2 == `0` && inputOPP == `/` && !(input1 == ``)){
    display.textContent = `Made by Michael Khanna :) Press AC to use the calculator`
  }  else if((input == `=`) && !(input1 == ``) && !(input2 == ``) && !(inputOPP == ``)){
    if(input1 == `8008` || input2 == `8008`){
      alert(`haha boobs`)
    }
    input1 = parseFloat(input1)
    input2 = parseFloat(input2)
    let answer = `${operate(inputOPP, input1, input2)}`
    if(answer.length > 27){
      answer = answer.slice(0, 27)
    }
    display.textContent = answer
    input1 = ``
    input2 = ``
    inputOPP = ``
    if(parseFloat(input1) > Math.floor(parseFloat(input1))) {
      decimal1 = true
    } else {
      decimal1 = false
    }
    decimal2 = false

  }

}
