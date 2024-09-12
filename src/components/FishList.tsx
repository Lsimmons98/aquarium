import FishCard from "./FishCard"
import "../style.css"
import { Fish } from "../types"

interface FishListProps {
  fishes: Fish[]
  fetchData: () => void
}

function FishList({ fishes, fetchData }: FishListProps) {
  const displayFishes = () =>
    fishes.map((fish: Fish) => (
      <FishCard key={fish.id} fish={fish} fetchData={fetchData} />
    ))

  return <div className="ui grid container">{displayFishes()}</div>
}

export default FishList
