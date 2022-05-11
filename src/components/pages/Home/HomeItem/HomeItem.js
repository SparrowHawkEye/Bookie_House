import React from "react";
import { useNavigate } from "react-router-dom";

const HomeItem = ({ homeItem }) => {
  const {_id, name, ISBN, publisher, author, no_of_page, quantity, img } = homeItem;
  const navigate = useNavigate();
  const navigateToItemDetails = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <>
      <div
        className="card card-side bg-base-200 justify-between rounded-md shadow-xl"
        data-aos="zoom-in-down"
      >
        <figure className="h-full">
          <img src={img} alt="Book" />
        </figure>
        <div className="card-body p-[1rem]">
          <p className="card-title">Name: {name}</p>
          <p>Author: {author}</p>
          <p>Publisher: {publisher}</p>
          <p>ISBN: {ISBN}</p>
          <p>Quantity: {quantity<1?"Sold 🚫":quantity }</p>
          <p>No of Pages: {no_of_page}</p>

          <div
            className="flex justify-center card-actions mt-1"
            data-aos="zoom-out-down"
          >
            <button
              onClick={() => navigateToItemDetails(_id)}
              className="btn btn-primary"
            >
              Manage Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeItem;
