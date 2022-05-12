import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../hooks/useItems";
import Loading from "../../Shared/Loading/Loading";
import HomeItem from "../Home/HomeItem/HomeItem";

const Inventory = () => {
  const [items] = useItems([]);
  const initialValue = Math.floor(Math.random() * (items.length - 6));
  const homeItems = items.slice(initialValue, initialValue + 6);

  return (
    <div className="my-20">
      <h2 className="text-5xl font-semibold mb-20 text-center text-gray-400 border_bottom">
        Books in the House
      </h2>
      <div className="w-[3px] h-[.5px] bg-black"></div>
      {homeItems.length === 0 ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {homeItems.map((homeItem) => (
            <HomeItem key={homeItem._id} homeItem={homeItem} />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-14">
        <Link to="/manageItems" className="btn btn-primary px-10 py-3">
          See All Books
        </Link>
        <Link
          to="/addItems"
          className="btn btn-success text-white px-10 py-3 ml-5"
        >
          Add Books
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
