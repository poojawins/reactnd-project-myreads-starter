import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchResults extends Component {
  state = {
    results: []
  }

  clearResults = () => {
    this.setState({results: []})
  }

  search = (query) => {
    if (query === '') {
      this.clearResults()
    } else {
      BooksAPI.search(query).then((results) => {
        if (results.error) {
          this.clearResults()
        } else {
          results.forEach((result) => {
            let book = this.props.books.find((book) => book.id === result.id)
            result.shelf = book ? book.shelf : 'none'
          })
          this.setState({results: results})
        }
      })
    }
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
            {this.state.results.length > 0 && this.state.results.map((result) =>
              <li key={result.id}>
                <Book
                  book={result}
                  shelf={result.shelf}
                  getBooks={this.props.getBooks}
                  onChange={this.props.onChange}
                />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

SearchResults.propTypes = {
  books: PropTypes.array,
  getBooks: PropTypes.func,
  onChange: PropTypes.func
}

export default SearchResults
