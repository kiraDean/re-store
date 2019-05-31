import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import { booksLoaded } from '../../actions'

import './book-list.css';



class BookList extends Component {

  componentDidMount() {
    //1 data
  const {bookstoreService} = this.props;
  const data = bookstoreService.getBooks();
  console.log(data);

    //dispatch action
    this.props.booksLoaded(data);

  }

  render() {
    const { books } = this.props;
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

const mapStateToProps = ({books}) => { //state
  return { books };  // books: state.books
};

const mapDispatchToProps = {
  booksLoaded  //bindActionCreators({booksLoaded}, dispatch)
};


export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));
