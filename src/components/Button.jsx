import React from 'react'
import { button, zero } from './Button.module.css';

const Button = ({ icon, value, clickHandler }) => {
    return (
        <button data-operation={value} className={`${button} ${icon === '0' ? zero : ''}`} onClick={clickHandler}>
            {icon}
        </button>
    )
}

export default Button
