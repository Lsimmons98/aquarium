import React, { useState } from "react"
import "../style.css"

function TankForm({ filterFishes }) {
  const [tankSpecs, setTankSpecs] = useState({
    gallons: 0,
    waterType: "Freshwater",
  })

  const handleChange = ({ target: { name, value } }) => {
    setTankSpecs({ ...tankSpecs, [name]: value })
  }

  const sanitizedData = { ...tankSpecs, gallons: Number(tankSpecs.gallons) }

  const handleSubmit = (e) => {
    e.preventDefault()
    filterFishes(sanitizedData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tank Size (Gallons):
        <input type="number" name="gallons" onChange={handleChange} />
      </label>
      <label>
        Water Type:
        <select name="waterType" onChange={handleChange}>
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
