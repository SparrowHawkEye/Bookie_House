import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useItems from "../../../hooks/useItems";

const Item = ({ item }) => {
  const { _id, name, ISBN, publisher, author, no_of_page, quantity, img } =
    item;
  const navigate = useNavigate();
  // const [reload, setReload] = useState(false);
  const [items, setItems] = useItems();
  const navigateToItemDetails = (id) => {
    navigate(`/item/${id}`);
  };

  
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
     /*  text: "Please don't delete any product if you are here just for visiting. It will also delete from the database. Consider creating you own product and then delete 🥶", */
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yeahh ",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://radiant-brook-38544.herokuapp.com/book/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
            
          });
        Swal.fire(
          "Deleted!",
          "The product deleted successfully from the database",
          "success"
        );
      }
    });
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
            <button
              onClick={() => navigateToItemDetails(_id)}
              className="btn btn-primary"
            >
              Manage Book
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error px-8 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
