import React from 'react'
import { screen, text } from "./Screen.module.css"

const Screen = ({ calculatorState }) => {
    return (
        <div className={screen}>
            <span className={text}>
                {calculatorState.output}
            </span>
        </div>
    )
}

export default Screen
