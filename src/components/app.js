import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
export default class App extends Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <BookList />
		<BookDetail />
      </div>
    );
  }
}
