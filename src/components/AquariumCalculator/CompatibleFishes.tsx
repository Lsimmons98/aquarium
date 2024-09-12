import "../../style.css"
import { Fish, TankSpecs } from "../../types"

function CompatibleFishes({
  filteredFishes,
  onClick,
  tankRequirement,
  aquariumSpecs,
}: {
  filteredFishes: Fish[]
  onClick: (id: number, newQuantity: number) => void
  tankRequirement: number
  aquariumSpecs: TankSpecs
}) {
  const displayFilteredFishes = () => {
    return filteredFishes.map((fish: Fish) => (
      <li key={fish.id}>
        {fish.fish_name}...{" "}
        <button
          name="addFish"
          onClick={() => {
            if (
              fish.average_length_inches + tankRequirement <=
              aquariumSpecs.gallons
            ) {
              onClick(fish.id, fish.quantity + 1)
            }
          }}
        >
          {" "}
          +{" "}
        </button>
      </li>
    ))
  }

  return (
    <div className="compatible-fish-box">
      <h2>Compatible Fish</h2>
      <ul>{displayFilteredFishes()}</ul>
    </div>
  )
}

export default CompatibleFishes
