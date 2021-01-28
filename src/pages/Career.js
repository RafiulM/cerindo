import React from "react";
import Banner from "../components/Banner";
import {CareerHead} from "../components/Data/CareerData";
import CareerComponents from "../components/CareerComponents";

const Career = () => {
  return (
    <>
      <Banner 
      {...CareerHead}
      place="Career"
      />
      <CareerComponents />
    </>
  );
};

export default Career;