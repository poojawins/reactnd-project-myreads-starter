import React from 'react'
import Bookshelf from './Bookshelf'

function BookshelfList(props) {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          Bookshelves are here
        </div>
      </div>
      <div className='open-search'>
        <button>Add a book</button>
      </div>
    </div>
  )
}

export default BookshelfList
