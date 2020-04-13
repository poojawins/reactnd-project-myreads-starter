import React from 'react'
// import * as BooksAPI from './BooksAPI'
import BookshelfList from './BookshelfList'
import SearchResults from './SearchResults'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? <SearchResults /> : <BookshelfList />}
      </div>
    )
  }
}

export default BooksApp
