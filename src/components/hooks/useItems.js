import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const url = "https://radiant-brook-38544.herokuapp.com/books"
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items,setItems];
};

export default useItems;