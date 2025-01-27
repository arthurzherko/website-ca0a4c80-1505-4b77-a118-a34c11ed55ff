import { Routes as RouterRoutes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Services } from "./pages/Services"

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </RouterRoutes>
  )
}