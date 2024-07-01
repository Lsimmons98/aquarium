import React from "react"
import "./style.css"

function FishList({ tankSpecs }) {
  // Filter fish based on tank specifications
  // const filteredFish = fishData.filter((fish) => {
  //   return (
  //     fish.tank_size_gallons <= tankSpecs.gallons &&
  //     fish.water_type === tankSpecs.waterType
  //   )
  // })

  return (
    <div className="FishList">
      <h2>Available Fish</h2>
      <div className="fish-container">
        {/* {filteredFish.map((fish) => (
          <FishCard key={fish.id} fish={fish} />
        ))} */}
      </div>
    </div>
  )
}

export default FishList
