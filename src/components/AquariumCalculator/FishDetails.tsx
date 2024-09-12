import React from "react"
import "../../style.css"
import { Fish } from "../../types"

function FishDetails({ aquariumFishes }: { aquariumFishes: Fish[] }) {
  const displayFishDetails = () => {
    return aquariumFishes.map((fish) => (
      <li key={fish.id}>
        {fish.fish_name} : {fish.notes}
      </li>
    ))
  }
  return (
    <div className="fish-details-box">
      <h2>Fish Details</h2>
      <ol>{displayFishDetails()}</ol>
    </div>
  )
}

export default FishDetails
