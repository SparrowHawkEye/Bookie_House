import React from 'react';

const Item = ({item}) => {
  const {name,ISBN,publisher,author,no_of_page,quantity,img,description} = item;
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="h-full">
          <img
            src={img}
            alt="Book"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Author: {author}</p>
          <p>Publisher: {publisher}</p>
          <p>ISBN: {ISBN}</p>
          <p>Quantity: {quantity}</p>
          <p>No of Pages: {no_of_page}</p>
          
          <div className="card-actions">
            <button className="btn btn-primary">Manage Book</button>
            <button className="btn btn-error px-8 text-white">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;