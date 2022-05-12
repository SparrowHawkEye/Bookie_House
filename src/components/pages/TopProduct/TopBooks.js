import Slider from "react-slick";
import React from "react";
import useItems from "../../hooks/useItems";
import Book from "./Book";
import Loading from "../../Shared/Loading/Loading";

const TopBooks = () => {
  const [items] = useItems();
  const initialValue = Math.floor(Math.random() * (items.length - 4));
  const topItems = items.slice(initialValue, initialValue + 4);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
  };

  return (
    <div className="mb-20">
      <h2 className="text-5xl font-semibold text-center mb-20 text-gray-400 border_bottom">
        Top Selling Books
      </h2>
      {items.length === 0 ? (
        <Loading />
      ) : (
        <Slider {...settings}>
          {topItems.map((book) => (
            <Book key={book._id} book={book}></Book>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default TopBooks;
