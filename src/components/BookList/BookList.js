import pt from 'prop-types';
import React from "react";
import BookItem from "../BookItem/BookItem";
import "./BookList.css";
import cls from 'classnames'


function BookList({ items }) {
  const list = items.map((item, index) => {
    const classes = cls(
      'BookList-item',
      { 'BookList-item-expensive': item.price > 50 },
    )
    return (
      <div key={`item-${index}`} className={classes}>
        <BookItem  {...item} />
      </div>
    )
  })
  return (
    <>
      {list}
    </>
  )
}

BookList.propTypes = {
  items: pt.array.isRequired
}

export default BookList;
