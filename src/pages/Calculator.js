import { useState, useEffect } from "react"

import NavBar from "../components/NavBar"
import AquariumCalculator from "../components/AquariumCalculator"

import "../style.css"

const Calculator = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <AquariumCalculator />
    </>
  )
}

export default Calculator
