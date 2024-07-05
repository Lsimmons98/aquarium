import { useState, useEffect } from "react"

import NavBar from "../components/NavBar"
import AquariumCalculator from "../components/AquariumCalculator"

import "../style.css"

const Calculator = () => {
  return (
    <>
      <NavBar />
      <AquariumCalculator />
    </>
  )
}

export default Calculator
