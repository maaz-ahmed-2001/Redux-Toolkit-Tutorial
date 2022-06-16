import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../userPost/index.jsx"
import CreatePost from "../userPost/CreatePost.jsx"
function Routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/createPost' element={<CreatePost/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing