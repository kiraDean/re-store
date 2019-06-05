import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions'
import Spinner from '../spinner'

import './book-list.css';



class BookList extends Component {

  componentDidMount() {
    //1. revieve data
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks().then((data) => booksLoaded(data))
    //2. dispatch action to store
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />
    }
    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} />
              </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({books, loading}) => { //state
  return { books, loading };  // books: state.books
};

const mapDispatchToProps = {
  booksLoaded  //bindActionCreators({booksLoaded}, dispatch)
};


export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
