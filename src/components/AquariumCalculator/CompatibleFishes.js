import React from "react"
import "../../style.css"

function CompatibleFishes({
  filteredFishes,
  onClick,
  tankRequirement,
  aquariumSpecs,
}) {
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
              onClick(fish.id, fish.quantity + 1)
            }
          }}
        >
          {" "}
          +{" "}
        </button>
      </li>
    ))
  }

  return (
    <div className="compatible-fish-box">
      <h2>Compatible Fish</h2>
      <ul>{displayFilteredFishes()}</ul>
    </div>
  )
}

export default CompatibleFishes
