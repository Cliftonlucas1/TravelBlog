import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Post from './components/Post'
import './App.css'
import Listings from './components/Listings'
import EditPost from './components/EditPost'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/EditPost/:id" element={<EditPost />} />
        </Routes>
      </main>
    </div>
  )
}
