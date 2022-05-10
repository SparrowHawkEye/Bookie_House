import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useItemDetails from "../../hooks/userItemDetails";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [item,setItem] = useItemDetails(itemId);
  const [reload,setReload] = useState(false);
  const {
    _id,
    name,
    ISBN,
    publisher,
    author,
    no_of_page,
    quantity,
    img,
    description,
  } = item;
  useEffect(()=>{
    const url = `https://radiant-brook-38544.herokuapp.com/book/${itemId}`
    fetch(url)
    .then((res) => res.json())
    .then((data) => setItem(data));
  },[itemId,reload])

  const inputHandler= e =>{
    e.preventDefault();
        const number = parseInt(e.target.number.value);
        if(number>=1){ 
        let quantityAdd = parseInt(quantity) + number;
        
        const url = `https://radiant-brook-38544.herokuapp.com/book/${itemId}`;
        fetch(url, {
                method: "PUT",
                body: JSON.stringify({
                    quantity: quantityAdd
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            .then((res) => res.json())
            .then((json) => {
                setReload(!reload);
                e.target.reset();
            });
        }
  }

  const deliveryHandler = (quantity) => {
    if (quantity > 1) {
        let quantityMinus = quantity - 1;

        const url = `https://radiant-brook-38544.herokuapp.com/book/${itemId}`;
        fetch(url, {
                method: "PUT",
                body: JSON.stringify({
                    quantity: quantityMinus
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            .then((res) => res.json())
            .then((json) => {
                setReload(!reload);
            });
    }
};
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex justify-center flex-wrap">
          <img
            alt={`Cover Of ${name}`}
            className="lg:h-full h-full object-cover object-center rounded border border-gray-200"
            src={img}
          />
          <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Book Name
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {name}
            </h1>
            <div className="flex mb-4"></div>
            <p className="leading-normal">{description}</p>
            <div className="flex mx-auto mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>

            <div>
              <div className="title-font font-medium text-2xl text-gray-900">
                ISBN: <span className="text-xl font-normal">{ISBN}</span>
              </div>
              <div className="title-font font-medium text-2xl text-gray-900">
                Publisher:
                <span className="text-xl font-normal">{publisher}</span>
              </div>
              <div className="title-font font-medium text-2xl text-gray-900">
                Author: <span className="text-xl font-normal">{author}</span>
              </div>
              <div className="title-font font-medium text-2xl text-gray-900">
                No of Page:
                <span className="text-xl font-normal">{no_of_page}</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="title-font font-medium text-2xl text-gray-900">
                  Quantity:
                  <span className="text-xl font-normal">{quantity}</span>
                </div>
                <button onClick={()=> deliveryHandler(quantity)} className="w-1/4 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Delivered
                </button>
                <form onSubmit={inputHandler}>
                <input
                  type="number" name="number"
                  className="w-1/4 text-gray-700 font-bold bg-gray-200 border-1 py-2 px-6 focus:outline-none rounded"
                />
                <input
                  type="submit"
                  value="Add Quantity"
                  className="w-1/4 ml-3 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                />
                </form>
              </div>
            <Link to="/manageItems" className="btn btn-primary font-normal mt-3 px-[5.5rem] py-2">
              See All Books
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetails;
