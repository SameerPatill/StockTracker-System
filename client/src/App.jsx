import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SideBar from './Components/Shop/Sidebar/SideBar'
import AddItem from './Components/Shop/AddItem/AddItem'
import NavBar from './Components/Shop/Navbar/NavBar'
import NavBarh from './Components/Hospital/Navbar/NavBarh'
import DeleteItem from './Components/Shop/DeleteItem/DeleteItem'
import UpdateItem from './Components/Shop/UpdateItem/UpdateItem'
import ViewItem from './Components/Shop/ViewItem/ViewItem'
import InvMgt from './Components/Billing/InvMgt'
import AddItemH from './Components/Hospital/AddItem/AddItem'
import DeleteItemH from './Components/Hospital/DeleteItem/DeleteItem'
import UpdateItemH from './Components/Hospital/UpdateItem/UpdateItem'
import ViewItemH from './Components/Hospital/ViewItem/ViewItem'
import Dashboard from './Components/Dashboard/DashBoard'
import Login from './Components/Login/Login'
// import MyTable from './Components/View/ViewTable'

// import DisplayFormDataInTable from "./Components/display-form-data-in-table/DisplayFormDataInTable";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* <SideBar /> */}
        <Routes>
          <Route path='/login' element={<Login />}>
            </Route>
        </Routes>
        <NavBarh />
        <Routes> 
          {/* <Route path="/viewtable" element={<MyTable />}>
          </Route> */}
          {/* <Route path="/viewtableN" element={<DisplayFormDataInTable />}>
          </Route> */}
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
          <Route path="/additem" element={<AddItem />}>
          </Route>
          <Route path="/deleteitem" element={<DeleteItem />}>
          </Route>
          <Route path="/updateitem" element={<UpdateItem />}>
          </Route>
          <Route path="/viewitem" element={<ViewItem />}>
          </Route>
          <Route path="/additemh" element={<AddItemH />}>
          </Route>
          <Route path="/deleteitemh" element={<DeleteItemH />}>
          </Route>
          <Route path="/updateitemh" element={<UpdateItemH />}>
          </Route>
          <Route path="/viewitemh" element={<ViewItemH />}>
          </Route>
          <Route path="/invmgt" element={<InvMgt />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
