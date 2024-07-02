import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"
import FishList from "../components/FishList"
import "../style.css"

function Favorites({ favoriteFishes }) {
  const displayFavoriteFishes = () => {}

  if (!favoriteFishes) {
    return "Loading"
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home</h1>
        {<FishList fishes={favoriteFishes} />}
      </main>
    </>
  )
}

export default Favorites
