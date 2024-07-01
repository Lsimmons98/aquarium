import React, { useState } from "react"
import "./style.css"

function TankForm({ onTankSpecsChange }) {
  const [gallons, setGallons] = useState(0)
  const [waterType, setWaterType] = useState("")

  const handleGallonsChange = (e) => {
    setGallons(e.target.value)
  }

  const handleWaterTypeChange = (e) => {
    setWaterType(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onTankSpecsChange({ gallons: Number(gallons), waterType })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Gallons:
        <input type="number" value={gallons} onChange={handleGallonsChange} />
      </label>
      <label>
        Water Type:
        <select value={waterType} onChange={handleWaterTypeChange}>
          <option value="">Select</option>
          <option value="Freshwater">Freshwater</option>
          <option value="Saltwater">Saltwater</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default TankForm
