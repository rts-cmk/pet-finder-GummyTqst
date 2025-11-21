import { createBrowserRouter, Router, RouterProvider } from "react-router"

import Intro from './Pages/Intro'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home'
import Details from './Pages/Details'

import "./Styles/main.sass"
import { petsLoader } from "./Loaders/petsLoaders"
import { petDetailsLoader } from "./Loaders/petDetailsLoader"


const router = createBrowserRouter([
  { path: '/', element: <Intro /> },

  {
    path: '/home',
    element: <Layout />,
    children: [
      { 
        path: "", 
        element: <Home />, 
        loader: petsLoader,
        hydrateFallbackElement: <p>Loading pets...</p>,
      },
      { 
        path: "details/:petId", 
        element: <Details />,
        loader: petDetailsLoader, 
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
