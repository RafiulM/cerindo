import React, { useEffect, useState, useContext } from "react";
import { businessService } from "../service/Business";
import { PortOperationsHead } from "../components/Data/BusinessData/PortOperationsDatas";
import Banner from "../components/Banner";
import PortOperationsComponents from "../components/BusinessComponents/PortOperationsComponents";
import {BannerSlider} from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { langContext } from '../langContext';
import { BusinessTitle } from '../components/BusinessComponents/BusinessLang';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(BannerSlider);

const PortOperations = () => {
  const { language } = useContext(langContext);
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness("618a31404161220b3a25edcd");
      const data = response.data;
      setBusinessList(data);
    };
    fetchData();
  }, []);

  if (businessList.length === 0) return null;
  return (
    <>
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={10000}
    className="aws-btn"
    >
      {businessList.banner.map((data, idx) => {
        return (<><Banner 
        img={data.url} 
        texted={true} 
        key={idx}
        place={BusinessTitle(language)}
        /></>);
      })}</AutoplaySlider>
      <PortOperationsComponents />
    </>
  );
};

export default PortOperations;
