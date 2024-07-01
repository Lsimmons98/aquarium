import React, { useState } from "react"
import "./style.css"
import FishList from "./FishList.js"
import TankForm from "./TankForm.js"
import MyAquarium from "./MyAquarium.js"

function App() {
  const [tankSpecs, setTankSpecs] = useState({ gallons: 0, waterType: "" })

  const handleTankSpecsChange = (specs) => {
    setTankSpecs(specs)
  }

  return (
    <div className="App">
      <h1>Fish Tank Calculator</h1>
      <TankForm onTankSpecsChange={handleTankSpecsChange} />
      <FishList tankSpecs={tankSpecs} />
      <MyAquarium />
    </div>
  )
}

export default App
