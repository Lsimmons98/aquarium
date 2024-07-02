import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import FishList from "../components/FishList"
import "../style.css"

function App() {
  const [tankSpecs, setTankSpecs] = useState({ gallons: 0, waterType: "" })
  const [fish, setFish] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/fishes")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setFish(data)
      })
  }, [])

  const handleTankSpecsChange = (specs) => {
    setTankSpecs(specs)
  }

  if (!fish) {
    return "Loading"
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home</h1>
        {<FishList fish={fish} />}
      </main>
    </>
  )
}

export default App
