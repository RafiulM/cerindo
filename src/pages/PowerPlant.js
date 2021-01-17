import React, { useEffect, useState } from "react";
import { businessService } from "../service/Business";
import { PowerPlantHead } from "../components/Data/BusinessData/PowerPlantDatas";
import Banner from "../components/Banner";
import PowerPlantComponents from "../components/BusinessComponents/PowerPlantComponents";

const PowerPlant = () => {
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getListBusiness();
      const data = response.data;
      setBusinessList(data);
    };
    fetchData();
  }, []);

  if (businessList.length === 0) return null;
  return (
    <>
      <Banner img={businessList[5].thumbnail.url} texted={true} />
      <PowerPlantComponents />
    </>
  );
};

export default PowerPlant;
