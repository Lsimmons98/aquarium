import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import FishList from "../components/FishList"
import AddFishForm from "../components/AddFishForm"
import "../style.css"

function Home() {
  const [fishes, setFishes] = useState([])
  const fetchFishes = () => {
    fetch("http://localhost:3001/fishes")
      .then((resp) => resp.json())
      .then((data) => {
        setFishes(data)
      })
  }

  useEffect(fetchFishes, [fishes])

  const handleAddFish = (fish) => {
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
      .then(setFishes([...fishes, fish]))
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home</h1>
        <AddFishForm handleAddFish={handleAddFish} />
        <FishList fishes={fishes} />
      </main>
    </>
  )
}

export default Home
