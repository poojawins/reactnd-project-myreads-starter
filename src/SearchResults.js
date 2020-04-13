import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class SearchResults extends Component {
  state = {
    books: []
  }

  search = (query) => {
    if (query === '') {
      this.clearResults()
    } else {
      BooksAPI.search(query).then((books) => this.setState({
        books: books
      }))
    }
  }

  clearResults = () => {
    this.setState({books: []})
  }

  updateBookshelf(book, shelf) {
    BooksAPI.update(book, shelf)
  }

  render() {
    return(
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/'><button className='close-search'>Close</button></Link>
          <div className="search-books-input-wrapper">
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={(event) => this.search(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.books.length > 0 && this.state.books.map((book) => <li key={book.id}><Book book={book} onChange={this.updateBookshelf.bind(this)} /></li>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchResults
