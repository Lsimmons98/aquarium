import React from "react"
import FishCard from "./FishCard"
import "../style.css"

function FishList({ fishes }) {
  const displayFishes = () =>
    fishes.map((fish) => <FishCard key={fish.id} fish={fish} />)

  // Filter fish based on tank specifications
  // const filteredFish = fishData.filter((fish) => {
  //   return (
  //     fish.tank_size_gallons <= tankSpecs.gallons &&
  //     fish.water_type === tankSpecs.waterType
  //   )
  // })

  return <div className="ui grid container">{displayFishes()}</div>
}

export default FishList
