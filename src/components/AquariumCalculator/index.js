import { useState, useEffect } from "react"
import FishDetails from "./FishDetails"
import MyAquarium from "./MyAquarium"
import TankForm from "../TankForm"
import CompatibleFishes from "./CompatibleFish"

import "../../style.css"

const AquariumCalculator = () => {
  const [fishes, setFishes] = useState([])
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

  const filteredFishes = fishes.filter(
    (fish) =>
      fish.tank_size_gallons <= aquariumSpecs.gallons &&
      fish.water_type === aquariumSpecs.waterType
  )
  const displayFishDetails = () => {
    return aquariumFishes.map((fish) => (
      <li key={fish.id}>
        {fish.fish_name} : {fish.notes}
      </li>
    ))
  }

  const tankRequirement = aquariumFishes.reduce(
    (sum, fish) => sum + fish.average_length_inches * fish.quantity,
    0
  )

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

  return (
    <main className="Aquariumcalculator-container">
      <h1>Aquarium AquariumCalculator</h1>
      <TankForm onSubmit={setAquariumSpecs} />
      <div className="boxes-container">
        <CompatibleFishes
          filteredFishes={filteredFishes}
          onClick={updateQuantity}
          tankRequirement={tankRequirement}
          aquariumSpecs={aquariumSpecs}
        />
        <MyAquarium aquariumFishes={aquariumFishes} onClick={updateQuantity} />
      </div>
      <FishDetails aquariumFishes={aquariumFishes} />
    </main>
  )
}

export default AquariumCalculator
