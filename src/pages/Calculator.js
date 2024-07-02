import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import TankForm from "../components/TankForm"
import "../style.css"

const Calculator = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Calculator</h1>
        <TankForm />
      </main>
    </>
  )
}

export default Calculator
