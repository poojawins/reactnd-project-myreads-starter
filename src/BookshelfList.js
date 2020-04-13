import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

function BookshelfList(props) {
  const shelves = [
    {id: 'currentlyReading', label: 'Currently Reading'},
    {id: 'wantToRead', label: 'Want to Read'},
    {id: 'read', label: 'Read'}
  ]

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          {
            shelves.map((shelf) =>
              <Bookshelf
                key={shelf.id}
                name={shelf.label}
                books={props.books.filter((book) => book.shelf === shelf.id)}
                getBooks={props.getBooks}
                onChange={props.onChange}
              />
            )
          }
        </div>
      </div>
      <div className='open-search'>
        <Link to='/search'><button>Add a book</button></Link>
      </div>
    </div>
  )
}

BookshelfList.propTypes = {
  books: PropTypes.array,
  getBooks: PropTypes.func,
  onChange: PropTypes.func
}

export default BookshelfList
