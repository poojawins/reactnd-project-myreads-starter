import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class BookshelfList extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }))
  }

  updateBookshelf(book, shelf) {
    BooksAPI.update(book, shelf).then((book) => this.getBooks())
  }

  render() {
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
                  books={this.state.books.filter((book) => book.shelf === shelf.id)}
                  onChange={this.updateBookshelf.bind(this)}
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
}

export default BookshelfList
