import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Item from "./Item/Item";
const ManageItems = () => {
  const [reload, setReload] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = "https://radiant-brook-38544.herokuapp.com/books";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setReload(!reload);
      });
  }, [reload]);
  return (
    <div className="mb-20">
      <div className=" my-20">
        <h2 className="text-5xl font-semibold text-center text-gray-400">
          All Books in the House
        </h2>
        <p className="text-center mt-2 mb-10 text-gray-400 border_bottom">
          All Books in the warehouse is listed here
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ManageItems;
