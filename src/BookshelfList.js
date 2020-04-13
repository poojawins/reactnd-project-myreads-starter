import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class BookshelfList extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }))
  }

  render() {
    const shelves = ["currentlyReading", "wantToRead", "read"]

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
                  key={shelf}
                  name={shelf}
                  books={this.state.books.filter((book) => book.shelf === shelf)}
                />
              )
            }
          </div>
        </div>
        <div className='open-search'>
          <button>Add a book</button>
        </div>
      </div>
    )
  }
}

export default BookshelfList
