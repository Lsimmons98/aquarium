import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { FishData } from "../types"
import "../style.css"

const AddFish = ({
  onAddFish,
}: {
  onAddFish: (fishData: FishData) => void
}) => {
  const [showForm, setShowForm] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FishData>({ mode: "onSubmit" })

  const onSubmit = (data: FishData) => {
    onAddFish(data)
    reset()
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
        <form className="add-fish-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Add a Fish</h2>
          <div className="form-group">
            <label htmlFor="fish_name">Fish Name:</label>
            <span className="error">
              {errors.fish_name && <p>{errors.fish_name.message}</p>}
            </span>
            <input
              type="text"
              id="fish_name"
              {...register("fish_name", { required: "Name is required" })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="tank_size_gallons">Tank Size (gallons):</label>
            <span className="error">
              {errors.tank_size_gallons && (
                <p>{errors.tank_size_gallons.message}</p>
              )}
            </span>
            <input
              type="number"
              id="tank_size_gallons"
              {...register("tank_size_gallons", {
                required: "Please input a tank size",
              })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="average_length_inches">
              Average Length (inches):
            </label>
            <span className="error">
              {errors.average_length_inches && (
                <p>{errors.average_length_inches.message}</p>
              )}
            </span>
            <input
              type="number"
              id="average_length_inches"
              {...register("average_length_inches", {
                required: "Please input average fish length (inches)",
              })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="aggressiveness">Aggressiveness:</label>
            <span className="error">
              {errors.aggressiveness && <p>{errors.aggressiveness.message}</p>}
            </span>
            <select
              id="aggressiveness"
              {...register("aggressiveness", {
                required:
                  "Please select a temperament option from the dropdown menu",
              })}
            >
              <option value="">Select Aggressiveness</option>
              <option value="Community">Community</option>
              <option value="Semi-aggressive">Semi-aggressive</option>
              <option value="Aggressive">Aggressive</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="water_type">Water Type:</label>
            <span className="error">
              {errors.water_type && <p>{errors.water_type.message}</p>}
            </span>
            <select
              id="water_type"
              {...register("water_type", {
                required: "Please select a water type from the dropdown menu",
              })}
            >
              <option value="">Select Water Type</option>
              <option value="Freshwater">Freshwater</option>
              <option value="Saltwater">Saltwater</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes:</label>
            <span className="error">
              {errors.notes && <p>{errors.notes.message}</p>}
            </span>
            <textarea
              id="notes"
              {...register("notes", {
                required: "Please input relevant species notes",
              })}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="image">Image URL:</label>
            <span className="error">
              {errors.image && <p>{errors.image.message}</p>}
            </span>
            <input
              type="text"
              id="image"
              {...register("image", { required: "Please input image URL" })}
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
