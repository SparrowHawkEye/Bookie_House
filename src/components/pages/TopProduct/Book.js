import React from 'react';

const Book = ({book}) => {
  const {name, publisher, author, img } = book;
  return (
    <>
      <div className='border-1 w-50 lg:w-64 mx-auto '>
        <div className='flex flex-col justify-center relative group'>
        <figure className="mx-auto">
          <img className='object-fill'
            data-aos="fade-down"
            data-aos-duration="1000"
            src={img}
            alt="Book"
          />
        </figure>
        <div className="text-md p-[1rem] opacity-0 group-hover:opacity-90 duration-300 absolute inset-x-0 bottom-0 top-0 text-center flex flex-col justify-center bg-gray-900 bg-opacity-70 text-white">
          <p className=' block font-normal wrap'> </p>
          <p >Author: {author}</p>
          <p>Publisher: {publisher}</p>
          </div>
          </div>
        </div>
    </>
  );
};

export default Book;