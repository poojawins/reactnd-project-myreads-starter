import React from 'react'
import Book from './Book'

function Bookshelf(props) {
  return(
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{props.name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          <Book />
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf
