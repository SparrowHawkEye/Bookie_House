import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";
import PopularBooks from "../PopularBooks/PopularBooks";
import TopBooks from "../TopProduct/TopBooks";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Wait for 1.5 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return isLoading ? (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <Loading />
    </div>
  ) : (
    <div className="w-11/12 mx-auto">
      <PageTitle title="Home" />
      <Banner />
      <Inventory />
      <TopBooks />
      <PopularBooks />
    </div>
  );
};

export default Home;
