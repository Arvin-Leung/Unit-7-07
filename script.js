'use strict'
document.getElementById('click').addEventListener('click', multiply)

let firstInt = 0
let secondInt = 0
let product = 0

function multiply () {
  firstInt = document.getElementById('first').value
  firstInt = parseInt(firstInt)
  secondInt = document.getElementById('second').value
  for (let i = 0; i < secondInt; i++) {
    product = product + firstInt
  }
  document.getElementById('result').innerHTML = 'Your product is ' + product
}
