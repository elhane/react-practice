import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

import {books} from './books'
import Book from './book'
import {greeting} from './testing/testing'

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);
        const {img, title, author} = book;
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'))
