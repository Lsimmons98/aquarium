import React, { useState } from "react"
import "../style.css"

const AddFish = ({ addFish }) => {
  const [fishData, setFishData] = useState({
    fish_name: "",
    tank_size_gallons: "",
    average_length_inches: "",
    aggressiveness: "",
    notes: "",
    water_type: "",
    image: "",
    favorite: false,
  })

  const handleChange = ({ target: { name, value } }) => {
    setFishData({
      ...fishData,
      [name]: value,
    })
  }

  const handleCheckboxChange = (e) => {
    setFishData({
      ...fishData,
      favorite: e.target.checked,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addFish(fishData)
    setFishData({
      fish_name: "",
      tank_size_gallons: "",
      average_length_inches: "",
      aggressiveness: "",
      notes: "",
      water_type: "",
      image: "",
      favorite: false,
    })
  }

  return (
    <form className="add-fish-form" onSubmit={handleSubmit}>
      <h2>Add New Fish</h2>
      <label>
        Fish Name:
        <input
          type="text"
          name="fish_name"
          value={fishData.fish_name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Tank Size (Gallons):
        <input
          type="number"
          name="tank_size_gallons"
          value={fishData.tank_size_gallons}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Average Length (Inches):
        <input
          type="number"
          name="average_length_inches"
          value={fishData.average_length_inches}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Aggressiveness:
        <input
          type="text"
          name="aggressiveness"
          value={fishData.aggressiveness}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Notes:
        <input
          type="text"
          name="notes"
          value={fishData.notes}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Water Type:
        <input
          type="text"
          name="water_type"
          value={fishData.water_type}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={fishData.image}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Favorite:
        <input
          type="checkbox"
          name="favorite"
          checked={fishData.favorite}
          onChange={handleCheckboxChange}
        />
      </label>
      <button type="submit">Add Fish</button>
    </form>
  )
}

export default AddFish
