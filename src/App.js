import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookshelfList from './BookshelfList'
import SearchResults from './SearchResults'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books,
    }))
  }

  updateBookshelf(book, shelf) {
    BooksAPI.update(book, shelf).then((book) => this.getBooks())
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/'>
          <BookshelfList
            books={this.state.books}
            getBooks={this.getBooks.bind(this)}
            onChange={this.updateBookshelf.bind(this)}
          />
        </Route>
        <Route exact path='/search'>
          <SearchResults
            books={this.state.books}
            getBooks={this.getBooks.bind(this)}
            onChange={this.updateBookshelf.bind(this)}
          />
        </Route>
      </div>
    )
  }
}

export default BooksApp
