import React from 'react'
import Bookshelf from './Bookshelf'

function BookshelfList(props) {

  const shelves = ["wantToRead", "currentlyReading", "read"]

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {shelves.map((shelf) => <Bookshelf key={shelf} name={shelf} />)}
        </div>
      </div>
      <div className='open-search'>
        <button>Add a book</button>
      </div>
    </div>
  )
}

export default BookshelfList
