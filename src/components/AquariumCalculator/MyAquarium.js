import React from "react"
import "../../style.css"

function MyAquarium({
  aquariumFishes,
  onClick,
  tankRequirement,
  aquariumSpecs,
  onClear,
}) {
  const displayAquariumFishes = () => {
    return aquariumFishes.map((fish) => (
      <li key={fish.id}>
        {fish.fish_name} - {fish.quantity}...
        <button
          onClick={() => onClick(fish.id, fish.quantity - 1)}
          name="removeFish"
        >
          {" "}
          -{" "}
        </button>
      </li>
    ))
  }

  const displayPercentageCapacity = () => {
    if (tankRequirement && aquariumSpecs.gallons) {
      return Math.ceil(
        (Number(tankRequirement) / Number(aquariumSpecs.gallons)) * 100
      )
    } else {
      return 0
    }
  }

  return (
    <div className="compatible-fish-box">
      <h2>My Aquarium -{displayPercentageCapacity()}% Capacity-</h2>
      <ul>{displayAquariumFishes()}</ul>
      <button onClick={onClear}>Clear My Aquarium</button>
    </div>
  )
}

export default MyAquarium
