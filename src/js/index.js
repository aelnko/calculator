const buttons = document.querySelectorAll('button');
let result = document.querySelector('.result__value');

const numbers = '1234567890'.split('');

let operand;
let num1;
let num2;

buttons.forEach((btn) => {
  const value = btn.innerHTML;
  btn.addEventListener('click', () => {
    if (numbers.includes(value)) {
      result.innerHTML = result.innerHTML === '0' ? value : result.innerHTML + value;
      num2 = num1 === undefined ? undefined : result.innerHTML;
    } else if (value === 'C') {
      result.innerHTML = '0';
    } else if (value === '.') {
      result.innerHTML += value;
    } else if (value === '±') {
      result.innerHTML = result.innerHTML > 0 ? `-${result.innerHTML}` : -Number(result.innerHTML);
    } else if (value === '=') {
      switch(operand) {
        case '+': 
          result.innerHTML = Number(num1) + Number(num2);
          break;
        case '-':
          result.innerHTML = Number(num1) - Number(num2);
          break;
        case '%':
          result.innerHTML = Number(num1) % Number(num2);
          break;
        case '÷':
          result.innerHTML = Number(num1) / Number(num2);
          break;
        case '×':
          result.innerHTML = Number(num1) * Number(num2);
          break;
      }
    } else {
      num1 = Number(result.innerHTML);
      result.innerHTML = '0';
      operand = value;
    }
  })
})