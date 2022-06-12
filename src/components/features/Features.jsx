import React from 'react'
import './Features.css'
import Trending from '../../pages/trending/Trending'
import Movies from '../../pages/movies/Movies'
import Series from '../../pages/series/Series'
import Search from '../../pages/search/Search'

import {Routes,Route} from 'react-router-dom'
const Features = () => {
  return (
    <div className="features">
        <Routes>
            <Route path="/">
                <Route index element={<Trending/>} />
                <Route path="movies" element={<Movies/>} />
                <Route path="series" element={<Series/>} />
                <Route path="search" element={<Search/>} />
            </Route>
        </Routes>

    </div>
  )
}

export default Features