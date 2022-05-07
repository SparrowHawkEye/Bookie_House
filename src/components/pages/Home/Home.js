import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <PageTitle title="Home"/>
      <Banner/>
      <Inventory/>
    </div>
  );
};

export default Home;
