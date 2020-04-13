import React from 'react'
// import * as BooksAPI from './BooksAPI'
import BookshelfList from './BookshelfList'
import SearchResults from './SearchResults'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BookshelfList} />
        <Route exact path='/search' component={SearchResults} />
      </div>
    )
  }
}

export default BooksApp
