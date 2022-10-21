import React from 'react'
import {Route, Routes} from "react-router-dom"
import { Home } from '../Pages/Home'
import { MyTrips } from '../Pages/MyTrips'
import { Offers } from '../Pages/Offers'

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path="/offers" element={<Offers />}>Offers</Route>
      <Route path="/mytrips" element={<MyTrips />}>My trips</Route>
    </Routes>
  )
}
