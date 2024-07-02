import React, { useState } from "react"
import PropTypes from "prop-types"
import "../style.css"

const FishCard = ({ fish }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(fish.favorite)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const {
    image,
    fish_name,
    tank_size_gallons,
    water_type,
    aggressiveness,
    notes,
  } = fish

  const addOrRemoveFavorite = () => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        favorite: !isFavorite,
      }),
    }
    fetch(`http://localhost:3001/fishes/${fish.id}`, options).then((resp) =>
      resp.json()
    )
  }

  const toggleFavorite = () => {
    addOrRemoveFavorite()
    setIsFavorite(!isFavorite)
  }
  return (
    <div className="fishTile" onClick={toggleExpanded}>
      <div id={fish_name} className="ui eight wide column">
        <h3>{fish_name}</h3>
        <div>
          <img className="fishImg" src={image} alt={fish_name} />
          <button
            className={`favorite-button ${isFavorite ? "favorite" : ""}`}
            onClick={(e) => {
              e.stopPropagation() // Prevent triggering the expand toggle
              toggleFavorite()
            }}
          >
            {isFavorite ? "★" : "☆"}
          </button>
          {isExpanded && (
            <div className="additional-info">
              <p>Minimum Tank Size: {tank_size_gallons} gallons</p>
              <p>Water Type: {water_type}</p>
              <p>Temperament: {aggressiveness}</p>
              <p>Care Requirements: {notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FishCard
