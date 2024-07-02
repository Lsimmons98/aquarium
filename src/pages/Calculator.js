import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import TankForm from "../components/TankForm"
import AddFishForm from "../components/AddFishForm"
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

  const listCompatibleFishes = () => {
    return filteredFishes.map((fish) => {
      return <li key={fish.id}>{fish.fish_name}</li>
    })
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
      <main className="calculator-container">
        <h1>Aquarium Calculator</h1>
        <TankForm filterFishes={filterFishes} />
        <div className="boxes-container">
          <div className="compatible-fish-box">
            <h2>Compatible Fish</h2>
            <ul>{listCompatibleFishes()}</ul>
          </div>
          <div className="my-aquarium-box">
            <h2>My Aquarium</h2>
            {/* Add content for My Aquarium here */}
          </div>
        </div>
        <AddFishForm />
      </main>
    </>
  )
}

export default Calculator
