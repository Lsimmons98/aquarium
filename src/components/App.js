import React, { useState, useEffect } from "react"
import "../style.css"
import FishList from "./FishList.js"
import TankForm from "./TankForm.js"
import MyAquarium from "./MyAquarium.js"

function App() {
  const [tankSpecs, setTankSpecs] = useState({ gallons: 0, waterType: "" })
  const [fish, setFish] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/fish")
      .then((resp) => resp.json())
      .then((data) => setFish(data))
  }, [])

  const handleTankSpecsChange = (specs) => {
    setTankSpecs(specs)
  }

  if (!fish) {
    return "Loading"
  }
  return (
    <div className="App">
      <h1>Fish Tank Calculator</h1>
      <TankForm onTankSpecsChange={handleTankSpecsChange} />
      <FishList tankSpecs={tankSpecs} fish={fish} />
      <MyAquarium />
    </div>
  )
}

export default App
