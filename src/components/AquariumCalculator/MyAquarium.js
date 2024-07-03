import React from "react"
import "../../style.css"

function MyAquarium({ aquariumFishes, onClick }) {
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

  return (
    <div className="compatible-fish-box">
      <h2>My Aquarium</h2>
      <ul>{displayAquariumFishes()}</ul>
    </div>
  )
}

export default MyAquarium
