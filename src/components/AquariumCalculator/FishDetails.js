import React from "react"
import "../../style.css"

function FishDetails({ aquariumFishes }) {
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
