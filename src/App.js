import React from 'react'
import MainPage from './Components/MainPage'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import IOD from './Components/IOD';
import Customs from './Components/Customs';
import HomePage from './Components/HomePage';
import Registration from './Components/Registration';
import IAD from './Components/IAD';
import HeaderSearchBar from './Components/HeaderSearchBar'
import SearchFilter from './Components/SearchFilter';
import Fiction from './Components/Fiction';
import NoPageFoundPage from './Components/NoPageFoundPage'
<link rel="stylesheet" href="path/to/flag-icon-css/css/flag-icon.min.css" />

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/iod" element={<IOD />} />
        <Route path="/iad" element={<IAD />} />
        <Route path="/search" element={<HeaderSearchBar />} />
        <Route path="/customs" element={<Customs />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path='*' element={<NoPageFoundPage />} />
        <Route path='/searchFilter' element={<SearchFilter />} />


      </Routes>
    </div>
  )
}