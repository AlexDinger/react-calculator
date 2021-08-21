const calculator = ({ firstValue, secondValue, operation }) => {
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;
    const modulus = (num1, num2) => num1 % num2;

    console.log(add(1, 1));
    console.log(subtract(1, 1));
    console.log(multiply(1, 1));
    console.log(divide(1, 1));
    console.log(modulus(1, 1));

    switch(operation) {
        case 'add':  return add(num1, num2);
        case 'subtract': return subtract(num1, num2);
        case 'multiply': return multiply(num1, num2);
        case 'divide': return divide(num1, num2);
        case 'modulus': return modulus(num1, num2); 
    }
}
export default calculator
