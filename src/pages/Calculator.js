import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import TankForm from "../components/TankForm"
import FishItem from "../components/FishItem"
import "../style.css"

const Calculator = () => {
  const [fishes, setFishes] = useState([])
  const [remainingCapacity, setRemainingCapacity] = useState(0)
  const [aquariumSpecs, setAquariumSpecs] = useState({
    gallons: "",
    waterType: "",
  })

  const fetchFishes = () => {
    fetch("http://localhost:3001/fishes")
      .then((resp) => resp.json())
      .then((data) => {
        setFishes(data)
      })
  }

  useEffect(fetchFishes, [])

  const aquariumFishes = fishes.filter((fish) => fish.quantity > 0)

  const displayAquariumFishes = () => {
    return aquariumFishes.map((fish) => (
      <li key={fish.id}>
        {fish.fish_name} - {fish.quantity}...
        <button
          onClick={() => updateQuantity(fish.id, fish.quantity - 1)}
          name="removeFish"
        >
          {" "}
          -{" "}
        </button>
      </li>
    ))
  }

  const filteredFishes = fishes.filter(
    (fish) =>
      fish.tank_size_gallons <= aquariumSpecs.gallons &&
      fish.water_type === aquariumSpecs.waterType
  )

  const displayFilteredFishes = () => {
    return filteredFishes.map((fish) => (
      <li key={fish.id}>
        {fish.fish_name}...{" "}
        <button
          name="addFish"
          onClick={() => {
            if (
              fish.average_length_inches + tankRequirement <=
              aquariumSpecs.gallons
            ) {
              updateQuantity(fish.id, fish.quantity + 1)
            }
          }}
        >
          {" "}
          +{" "}
        </button>
      </li>
    ))
  }

  const displayFishDetails = () => {
    return aquariumFishes.map((fish) => (
      <li key={fish.id}>
        {fish.fish_name} : {fish.notes}
      </li>
    ))
  }

  const updateQuantity = (id, math) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        quantity: math,
      }),
    }
    fetch(`http://localhost:3001/fishes/${id}`, options).then(fetchFishes)
  }

  const tankRequirement = aquariumFishes.reduce(
    (sum, fish) => sum + fish.average_length_inches * fish.quantity,
    0
  )

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="calculator-container">
        <h1>Aquarium Calculator</h1>
        <TankForm setAquariumSpecs={setAquariumSpecs} />
        <div className="boxes-container">
          <div className="compatible-fish-box">
            <h2>Compatible Fish</h2>
            <ul>{displayFilteredFishes()}</ul>
          </div>
          <div className="compatible-fish-box">
            <h2>My Aquarium</h2>
            <ul>{displayAquariumFishes()}</ul>
          </div>
        </div>
        <div className="fish-details-box">
          <h2>Fish Details</h2>
          <ul>{displayFishDetails()}</ul>
        </div>
      </main>
    </>
  )
}

export default Calculator
