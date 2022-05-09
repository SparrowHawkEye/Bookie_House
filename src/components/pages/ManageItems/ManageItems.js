import React, { useEffect, useState } from 'react';
// import useItems from "../../hooks/useItems";
import Item from './Item/Item';
const ManageItems = () => {
  const [reload,setReload] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/books"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
      // setReload(!reload)
  }, [reload]);
  return (
    <>
    <h2 className="text-5xl font-semibold text-center mt-10 text-gray-400">All Books in the House</h2>
    <h2 className="text-xl font-semibold text-center mt-2 mb-10 text-gray-400">All Books in the warehouse is listed here</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <Item key={item._id} item={item} />
      ))}
    </div>
    {/* <Link to="/manageItems" className="btn btn-primary">See All Books</Link> */}
  </>
  );
};

export default ManageItems;