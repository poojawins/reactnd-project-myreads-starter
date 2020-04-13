import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

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

  render() {
    return(
      <div className='search-books'>
        <div className='search-books-bar'>
          <button className='close-search'>Close</button>
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
            {this.state.books.length > 0 && this.state.books.map((book) => <li><Book key={book.id} book={book} /></li>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchResults
