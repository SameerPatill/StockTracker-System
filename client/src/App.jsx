import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './Components/Sidebar/SideBar'
import NavBar from './Components/Navbar/NavBar'
import AddItem from './Components/AddItem/AddItem'
import Dashboard from './Components/Dashboard/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <SideBar />
        <NavBar />
        <Routes>
          <Route path="/additem" element={<AddItem />}>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
