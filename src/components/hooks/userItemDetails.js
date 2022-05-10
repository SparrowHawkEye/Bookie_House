import { useEffect, useState } from "react";
const useItemDetails = (itemId) => {
  const [item, setItem] = useState({});
  useEffect(() => {
    const url = `https://radiant-brook-38544.herokuapp.com/book/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId]);
  return [item,setItem]
};

export default useItemDetails;