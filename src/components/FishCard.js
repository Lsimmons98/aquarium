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
    <div className="fish-card">
      <img src={image} alt={fish_name} className="fish-image" />
      <h2>{fish_name}</h2>
      <p>
        <strong>Minimum Tank Size:</strong> {tank_size_gallons} gallons
      </p>
      <p>
        <strong>Water Type:</strong> {water_type}
      </p>
      <p>
        <strong>Temperament:</strong> {aggressiveness}
      </p>
      <p>
        <strong>Care Requirements:</strong> {notes}
      </p>
    </div>
  )
}
