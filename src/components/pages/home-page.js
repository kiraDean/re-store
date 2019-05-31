import React from 'react';
import BookList from '../book-list'
import ShoppingCartTable from '../shopping-cart-table'

const HomePage = () => {
  const books = [
    { id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
    { id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 45,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'}
  ];
  return (
    <div>
      <BookList books={books} />
      <ShoppingCartTable />
    </div>
  )
};

export default HomePage;
