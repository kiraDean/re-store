import updateShoppingCart from './update-shopping-cart';
import updateBookList from './update-book-list';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  }
};

export default reducer;
