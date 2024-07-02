import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import TankForm from "../components/TankForm"
import FishList from "../components/FishList"
import "../style.css"

const Calculator = () => {
  const [fishes, setFishes] = useState([])
  const [filteredFishes, setFilteredFishes] = useState([])

  const filterFishes = (specs) => {
    const { gallons, waterType } = specs
    setFilteredFishes(
      fishes.filter(
        (fish) =>
          fish.tank_size_gallons <= gallons && fish.water_type === waterType
      )
    )
  }

  useEffect(() => {
    fetch("http://localhost:3001/fishes")
      .then((resp) => resp.json())
      .then((data) => {
        setFishes(data)
      })
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Calculator</h1>
        <TankForm filterFishes={filterFishes} />
        <FishList fishes={filteredFishes} />
      </main>
    </>
  )
}

export default Calculator
