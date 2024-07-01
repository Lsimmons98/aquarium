import React from "react"
import PropTypes from "prop-types"
import "../style.css"

const FishCard = ({ fish }) => {
  const {
    image,
    fish_name,
    tank_size_gallons,
    water_type,
    aggressiveness,
    notes,
  } = fish
  return (
    <div className="fishTile">
      <div id={fish_name} className="ui eight wide column">
        <h3>{fish_name}</h3>
        <div>
          <img className="fishImg" src={image} />
          <p>Minimum Tank Size: {tank_size_gallons} gallons</p>
          <p>Water Type: {water_type}</p>
          <p>Temperament: {aggressiveness}</p>
          <p>Care Requirements: {notes}</p>
        </div>
      </div>
    </div>
  )
}

export default FishCard
