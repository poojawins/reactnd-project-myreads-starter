import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

function Bookshelf(props) {
  return(
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{props.name}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {props.books.map((book) =>
            <li key={book.id}>
              <Book
                book={book}
                shelf={book.shelf}
                getBooks={props.getBooks}
                onChange={props.onChange}
              />
            </li>
          )}
        </ol>
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  name: PropTypes.string,
  books: PropTypes.array,
  getBooks: PropTypes.func,
  onChange: PropTypes.func
}

export default Bookshelf
