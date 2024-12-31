import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/home/Home.jsx"
import Single from "./pages/single/Single.jsx"
import React from "react"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/single/:id",
    element: <Single />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
