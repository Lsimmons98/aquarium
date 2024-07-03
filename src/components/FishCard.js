import React, { useState } from "react"
import PropTypes from "prop-types"
import "../style.css"

const FishCard = ({ fish }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(fish.favorite)

  const toggleExpand = () => {
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
    <div className="fishTile">
      <div id={fish_name} className="ui eight wide column">
        <h3>{fish_name}</h3>
        <img className="fishImg" src={image} alt={fish_name} />
        <button
          className={`favorite-button ${isFavorite ? "favorite" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite()
          }}
        >
          {isFavorite ? "★" : "☆"}
        </button>
        <button className="info-button" onClick={toggleExpand}>
          Click Here for More
        </button>
        {isExpanded && (
          <div className="fish-details">
            <p>Minimum Tank Size: {tank_size_gallons} gallons</p>
            <p>Water Type: {water_type}</p>
            <p>Temperament: {aggressiveness}</p>
            <p>Care Requirements: {notes}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FishCard
