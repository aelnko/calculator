const buttons=document.querySelectorAll("button");let result=document.querySelector(".result__value");const numbers="1234567890".split("");let operand,num1,num2;buttons.forEach((e=>{const n=e.innerHTML;e.addEventListener("click",(()=>{if(numbers.includes(n))result.innerHTML="0"===result.innerHTML?n:result.innerHTML+n,num2=void 0===num1?void 0:Number(result.innerHTML);else if("C"===n)result.innerHTML="0";else if("."===n)result.innerHTML+=n;else if("±"===n)result.innerHTML=result.innerHTML>0?`-${result.innerHTML}`:""+-Number(result.innerHTML);else if("%"===n)result.innerHTML=.01*Number(result.innerHTML);else if("="===n)switch(operand){case"+":result.innerHTML=Number(num1)+Number(num2);break;case"-":result.innerHTML=Number(num1)-Number(num2);break;case"÷":result.innerHTML=Number(num1)/Number(num2);break;case"×":result.innerHTML=Number(num1)*Number(num2)}else num1=Number(result.innerHTML),result.innerHTML="0",operand=n}))}));