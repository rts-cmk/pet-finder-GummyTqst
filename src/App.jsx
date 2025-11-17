import { createBrowserRouter, Router, RouterProvider } from "react-router"

import Intro from './Pages/Intro'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home'
import Details from './Pages/Details'


const router = createBrowserRouter([
  { path: '/', element: <Intro /> },

  {
    path: '/home',
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "dog/:id", element: <Details /> },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
