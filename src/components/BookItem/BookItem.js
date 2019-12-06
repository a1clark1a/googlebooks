import React from "react";
import "./BookItem.css";

export default function BookItem({ author, price, description }) {
  return (
    <div>
      <h2>props.title</h2>
      <div className="itemWrapper">
        <img src="" alt="" />
        <legend>Author:{author}</legend>
        <p>Price:{price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
