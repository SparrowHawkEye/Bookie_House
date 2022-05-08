import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const {
    _id,
    name,
    ISBN,
    publisher,
    author,
    no_of_page,
    quantity,
    img,
  } = item;
  const navigate = useNavigate();
  const navigateToItemDetails = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <>
      <div
        className="card card-side bg-base-100 shadow-xl"
        data-aos="zoom-in-down"
      >
        <figure className="h-full">
          <img
            data-aos="fade-down"
            data-aos-duration="1000"
            src={img}
            alt="Book"
          />
        </figure>
        <div className="card-body p-[1rem]">
          <h2 className="card-title">Name: {name}</h2>
          <p>Author: {author}</p>
          <p>Publisher: {publisher}</p>
          <p>ISBN: {ISBN}</p>
          <p>Quantity: {quantity}</p>
          <p>No of Pages: {no_of_page}</p>

          <div className="card-actions" data-aos="zoom-out-down">
            <button onClick={()=>navigateToItemDetails(_id)} className="btn btn-primary">Manage Book</button>
            <button className="btn btn-error px-8 text-white">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
