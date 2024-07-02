import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import FishList from "../components/FishList"
import "../style.css"

function Home() {
  const [fishes, setFishes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/fishes")
      .then((resp) => resp.json())
      .then((data) => {
        setFishes(data)
      })
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home</h1>
        {<FishList fishes={fishes} />}
      </main>
    </>
  )
}

export default Home
