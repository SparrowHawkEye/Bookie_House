import React from "react";
import useItems from "../../hooks/useItems";
import HomeItem from "../Home/HomeItem/HomeItem";

const Inventory = () => {
  const [items] = useItems([]);
  const homeItems = items.slice(0, 6);
  console.log(items);
  console.log(homeItems);
  return (
    <>
      <h2 className="text-3xl font-semibold text-center mb-5 underline">Books in the House</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {homeItems.map((homeItem) => (
          <HomeItem key={homeItem.ISBN} homeItem={homeItem} />
        ))}
      </div>
    </>
  );
};

export default Inventory;
