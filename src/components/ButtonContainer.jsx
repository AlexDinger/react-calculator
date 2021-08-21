import React from 'react'
import Button from "./Button.jsx"
import { buttonContainer } from "./ButtonContainer.module.css"

const ButtonContainer = ({ clickHandler }) => {

    const buttonList = [
        {label: 'AC', value: 'clear'},
        {label: '+/-', value: null},
        {label: '%', value: 'modulus'},
        {label: '÷', value: 'divide'},
        {label: '7', value: 7},
        {label: '8', value: 8},
        {label: '9', value: 9},
        {label: 'X', value: 'multiply'},
        {label: '4', value: 4},
        {label: '5', value: 5},
        {label: '6', value: 6},
        {label: '-', value: 'subtract'},
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: 3},
        {label: '+', value: 'add'},
        {label: '0', value: 0},
        {label: '.', value: 'dot'},
        {label: '=', value: 'equals'},
    ]

    return (
        <div className={buttonContainer}>
            {buttonList.map((buttonItem, index) => {
                return <Button key={index} icon={buttonItem.label} value={buttonItem.value} clickHandler={clickHandler} />
            })}
        </div>
    )
}

export default ButtonContainer
