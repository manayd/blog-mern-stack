import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateBlog from './pages/CreateBlog'
import DeleteBlog from './pages/DeleteBlog'
import ShowBlog from './pages/ShowBlog'
import EditBlog from './pages/EditBlog'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blogs/create' element={<CreateBlog />} />
      <Route path='/blogs/delete/:id' element={<DeleteBlog />} />
      <Route path='/blogs/details/:id' element={<ShowBlog />} />
      <Route path='/blogs/edit/:id' element={<EditBlog />} />

    </Routes>
  )
}

export default App