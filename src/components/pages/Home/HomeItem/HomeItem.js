import React from "react";

const HomeItem = ({ homeItem }) => {
  const { name, ISBN, publisher, author, no_of_page, quantity, img } = homeItem;
  return (
    <>
      <div
        className="card card-side bg-base-100 shadow-xl"
        data-aos="zoom-in-down"
      >
        <figure className="h-full">
          <img src={img} alt="Book" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Name: {name}</h2>
          <p>Author: {author}</p>
          <p>Publisher: {publisher}</p>
          <p>ISBN: {ISBN}</p>
          <p>Quantity: {quantity}</p>
          <p>No of Pages: {no_of_page}</p>

          <div
            className="flex justify-center card-actions"
            data-aos="zoom-out-down"
          >
            <button className="btn btn-primary px-14 my-5">Manage Book</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeItem;
