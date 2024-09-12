import { useForm } from "react-hook-form"
import "../style.css"
import { TankSpecs } from "../types"

function TankForm({ onSubmit }: { onSubmit: (data: TankSpecs) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TankSpecs>()

  const handleFormSubmit = (tankSpecs: TankSpecs) => {
    onSubmit(tankSpecs)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label>
        Tank Size (Gallons):
        <input
          type="number"
          {...register("gallons", { required: "Tank size is required" })}
        />
        {errors.gallons && <p className="error">{errors.gallons.message}</p>}
      </label>
      <label>
        Water Type:
        <select
          {...register("waterType", { required: "Water type is required" })}
        >
          <option value="">Select</option>
          <option value="Freshwater">Freshwater</option>
          <option value="Saltwater">Saltwater</option>
        </select>
        {errors.waterType && (
          <p className="error">{errors.waterType.message}</p>
        )}
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default TankForm
