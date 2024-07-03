import React, { useState } from "react"
import "../style.css"

const FishItem = ({ fish, manageMyAquarium, math }) => {
  const handleClick = (e) => {
    manageMyAquarium(fish, e)
  }

  return (
    <li>
      {fish.fish_name} ({fish.quantity})
      <button name={math} onClick={handleClick}>
        {math}
      </button>
    </li>
  )
}

export default FishItem
