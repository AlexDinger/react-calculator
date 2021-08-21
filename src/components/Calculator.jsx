import React, { useState } from 'react'
import Screen from "./Screen.jsx"
import ButtonContainer from "./ButtonContainer"
import { calculatorStyle } from "./Calculator.module.css";
import calculator from "../calculator"


const Calculator = () => {

    const [calculatorState, setCalculatorState] = useState({
        firstValue: 0,
        secondValue: 0,
        operation: undefined,
        output: 0
    });

    // Appends number to calculator state based on currentNumber
    const appendNumber = (number) => {
        if (calculatorState.operation === undefined) {
            const initialNumber = calculatorState.firstValue
            const appendedNumber = initialNumber === 0 ? number : initialNumber + number
            setCalculatorState({ ...calculatorState, firstValue: appendedNumber, output: appendedNumber })
        }
        else {
            const initialNumber = calculatorState.secondValue
            const appendedNumber = initialNumber === 0 ? number : initialNumber + number
            setCalculatorState({ ...calculatorState, secondValue: appendedNumber,output: appendedNumber })
        }
    }

    const clearScreen = () => {
        setCalculatorState({firstValue: 0, secondValue: 0, operation: undefined, output: 0});
    }

    const renderCalculation = result => {
        setCalculatorState({...calculatorState, firstValue: result, output: result, secondValue: 0, operation: undefined})
    }

    const calculate = () => {
        const calc = calculator(calculatorState);
        renderCalculation(calc);
    }

    // Determine symbol value
    const operationReducer = symbol => {
        switch (symbol) {
            case 'clear': return clearScreen()
            case 'add': return setCalculatorState({...calculatorState, operation: 'add', output: 0})
            case 'subtract': return setCalculatorState({...calculatorState, operation: 'subtract', output: 0})
            case 'multiply': return setCalculatorState({...calculatorState, operation: 'multiply', output: 0})
            case 'divide': return setCalculatorState({...calculatorState, operation: 'divide', output: 0})
            case 'modulus': return setCalculatorState({...calculatorState, operation: 'modulus', output: 0})
            case 'equals': return calculate()
        }
    }

    const clickHandler = (e) => {
        const operation = e.target.dataset.operation;

        // Determines if operation is a number or a symbol
        !isNaN(operation)
            ? appendNumber(operation)
            : operation === 'dot' 
                ? appendNumber(operation)
                : operationReducer(operation)
    }

    return (
        <div className={calculatorStyle}>
            <Screen calculatorState={calculatorState} />
            <ButtonContainer clickHandler={(e) => clickHandler(e)} />
        </div>
    )
}

export default Calculator
