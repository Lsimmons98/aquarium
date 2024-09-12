import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import FishList from "../components/FishList"
import AddFishForm from "../components/AddFishForm"
import { FishData, Fish } from "../types"
import "../style.css"

function Home() {
  const [fishes, setFishes] = useState<Fish[]>([])
  const fetchFishes = () => {
    fetch("http://localhost:3001/fishes")
      .then((resp) => resp.json())
      .then((data) => {
        setFishes(data)
      })
  }

  useEffect(fetchFishes, [])

  const handleAddFish = (fish: FishData) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(fish),
    }
    fetch("http://localhost:3001/fishes", options)
      .then((resp) => resp.json())
      .then((newFish: Fish) => {
        setFishes([...fishes, newFish])
      })
  }

  return (
    <>
      <NavBar />
      <main>
        <h1>Home</h1>
        <AddFishForm onAddFish={handleAddFish} />
        <FishList fishes={fishes} fetchData={fetchFishes} />
      </main>
    </>
  )
}

export default Home
