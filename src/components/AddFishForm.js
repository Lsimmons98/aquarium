import React, { useState } from "react"
import "../style.css"

const AddFish = ({ onAddFish }) => {
  const [showForm, setShowForm] = useState(false)
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
    onAddFish(fishData)
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
    <div className="add-fish-container">
      {!showForm && (
        <button
          className="toggle-form-button"
          onClick={() => setShowForm(true)}
        >
          Add a Fish
        </button>
      )}

      {showForm && (
        <form className="add-fish-form" onSubmit={handleSubmit}>
          <h2>Add a Fish</h2>
          <div className="form-group">
            <label htmlFor="fish_name">Fish Name:</label>
            <input
              type="text"
              id="fish_name"
              name="fish_name"
              value={fishData.fish_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tank_size_gallons">Tank Size (gallons):</label>
            <input
              type="number"
              id="tank_size_gallons"
              name="tank_size_gallons"
              value={fishData.tank_size_gallons}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="average_length_inches">
              Average Length (inches):
            </label>
            <input
              type="number"
              id="average_length_inches"
              name="average_length_inches"
              value={fishData.average_length_inches}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="aggressiveness">Aggressiveness:</label>
            <select
              id="aggressiveness"
              name="aggressiveness"
              value={fishData.aggressiveness}
              onChange={handleChange}
              required
            >
              <option value="">Select Aggressiveness</option>
              <option value="Community">Community</option>
              <option value="Semi-aggressive">Semi-aggressive</option>
              <option value="Aggressive">Aggressive</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="water_type">Water Type:</label>
            <select
              id="water_type"
              name="water_type"
              value={fishData.water_type}
              onChange={handleChange}
              required
            >
              <option value="">Select Water Type</option>
              <option value="Freshwater">Freshwater</option>
              <option value="Saltwater">Saltwater</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={fishData.notes}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              name="image"
              value={fishData.image}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Add Fish</button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>
        </form>
      )}
    </div>
  )
}

export default AddFish
