import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import FishList from "../components/FishList"
import "../style.css"

function Home() {
  const [tankSpecs, setTankSpecs] = useState({ gallons: 0, waterType: "" })
  const [fishes, setFishes] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/fish")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setFishes(data)
      })
  }, [])

  const handleTankSpecsChange = (specs) => {
    setTankSpecs(specs)
  }

  if (!fishes) {
    return "Loading"
  }

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
