import React from "react"

const FavoritesContext = React.createContext()

function FavoritesContextProvider({ children }) {
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return (
    <FavoritesContext.Provider value={null}>
      {children}
    </FavoritesContext.Provider>
  )
}

export { FavoritesContext, FavoritesProvider }
