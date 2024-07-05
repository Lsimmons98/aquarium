import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import FishList from "../components/FishList"
import "../style.css"

function Favorites() {
  const [fishes, setFishes] = useState([])
  const [fetchTrigger, setFetchTrigger] = useState(false)

  const fetchData = () => setFetchTrigger(!fetchTrigger)

  const fetchFishes = () => {
    fetch("http://localhost:3001/fishes")
      .then((resp) => resp.json())
      .then((data) => {
        setFishes(data)
      })
  }

  useEffect(fetchFishes, [fetchData])

  const favoriteFishes = fishes.filter((fish) => fish.favorite === true)

  return (
    <>
      <NavBar />
      <main>
        <h1>Favorites</h1>
        {<FishList fishes={favoriteFishes} fetchData={fetchData} />}
      </main>
    </>
  )
}

export default Favorites
