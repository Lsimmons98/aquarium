import React from "react"
import FishCard from "./FishCard"
import "../style.css"

function FishList({ fishes, fetchData }) {
  const displayFishes = () =>
    fishes.map((fish) => (
      <FishCard key={fish.id} fish={fish} fetchData={fetchData} />
    ))

  return <div className="ui grid container">{displayFishes()}</div>
}

export default FishList
