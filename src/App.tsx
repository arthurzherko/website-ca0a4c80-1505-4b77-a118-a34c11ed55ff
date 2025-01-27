import { BrowserRouter } from "react-router-dom"
import { Routes } from "./Routes"
import { Toaster } from "./components/ui/toaster"

export function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Toaster />
    </BrowserRouter>
  )
}