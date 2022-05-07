import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../hooks/useItems";
import HomeItem from "../Home/HomeItem/HomeItem";

const Inventory = () => {
  const [items] = useItems([]);
  const homeItems = items.slice(0, 6);
  console.log(items);
  console.log(homeItems);
  return (
    <div >
      <h2 className="text-5xl font-semibold text-center mb-5 text-gray-400">
        Books in the House
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" >
        {homeItems.map((homeItem) => (
          <HomeItem key={homeItem.ISBN} homeItem={homeItem} />
        ))}
      </div>
      <div className="flex justify-center my-5">
        <Link to="/manageItems" className="btn btn-primary px-10 py-3">
          See All Books
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
