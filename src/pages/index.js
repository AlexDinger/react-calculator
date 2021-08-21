import * as React from "react"
import Calculator from "../components/Calculator.jsx"
import { container } from "../components/app.module.css"

const IndexPage = () => {
  return (
    <div className={container}>
      <Calculator />
    </div>
  )
}

export default IndexPage
