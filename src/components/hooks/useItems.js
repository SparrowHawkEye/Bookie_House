import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/books"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items,setItems];
};

export default useItems;