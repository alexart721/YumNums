import React from 'react'
import './styles.css';

function SearchBar({filterMovies}) {
  return (
    <div>
      <input type="text" class="searchBar"placeholder="Search..." onChange={event => filterMovies(event.target.value)}/>
    </div>
  )
}

export default SearchBar
