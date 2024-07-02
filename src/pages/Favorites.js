import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import FishList from "../components/FishList"
import "../style.css"

function Favorites() {
  const [fishes, setFishes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/fishes")
      .then((resp) => resp.json())
      .then((data) => {
        setFishes(data)
      })
  }, [])

  const favoriteFishes = fishes.filter((fish) => fish.favorite === true)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Favorites</h1>
        {<FishList fishes={favoriteFishes} />}
      </main>
    </>
  )
}

export default Favorites
