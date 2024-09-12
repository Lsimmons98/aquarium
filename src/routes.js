import Home from "./pages/Home"
import Calculator from "./pages/Calculator"
import Favorites from "./pages/Favorites"

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]

export default routes
