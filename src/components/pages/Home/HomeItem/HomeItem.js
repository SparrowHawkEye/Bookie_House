import React from "react";

const HomeItem = ({homeItem}) => {
  const {name,ISBN,publisher,auhtor,no_of_page,quantity,img,description} = homeItem;
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-[20%]">
          <img
            src={img}
            alt="Book"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Author: {auhtor}</p>
          <p>Publisher: {publisher}</p>
          <p>ISBN: {ISBN}</p>
          <p>Quantity: {quantity}</p>
          <p>No of Pages: {no_of_page}</p>
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Manage Book</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeItem;
