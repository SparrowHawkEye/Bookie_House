import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../hooks/useItems";
import HomeItem from "../Home/HomeItem/HomeItem";

const Inventory = () => {
  const [items] = useItems([]);
  const homeItems = items.slice(5, 11);
  
  return (
    <div className="my-20">
      <h2 className="text-5xl font-semibold mb-20 text-center text-gray-400">
        Books in the House
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" >
        {homeItems.map((homeItem) => (
          <HomeItem key={homeItem._id} homeItem={homeItem} />
        ))}
      </div>
      <div className="flex justify-center mt-14">
        <Link to="/manageItems" className="btn btn-primary px-10 py-3">
          See All Books
        </Link>
        <Link to="/addItems" className="btn btn-success text-white px-10 py-3 ml-5">
          Add Books
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
