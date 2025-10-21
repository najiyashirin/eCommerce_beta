import React from 'react'
import { Link,Routes,Route, Navigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'


function App() {
  return (
    <>
    <div>App</div>
    <Link to='/signup'>signup</Link> <br/>
    <Link to='/login'>login</Link><br/>

    <Routes>
    <Route path='/signup' element={<Signup />} />
    <Route path='/login' element={<Login />} />
    </Routes>
    </>
    
  )
}

export default App