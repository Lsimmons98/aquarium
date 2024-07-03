import React, { useState } from "react"
import "../style.css"

function TankForm({ onSubmit }) {
  const [tankSpecs, setTankSpecs] = useState({
    gallons: 0,
    waterType: "Freshwater",
  })

  const onChange = ({ target: { name, value } }) => {
    setTankSpecs({ ...tankSpecs, [name]: value })
  }

  const sanitizedData = { ...tankSpecs, gallons: Number(tankSpecs.gallons) }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(sanitizedData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tank Size (Gallons):
        <input type="number" name="gallons" onChange={onChange} />
      </label>
      <label>
        Water Type:
        <select name="waterType" onChange={onChange}>
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
