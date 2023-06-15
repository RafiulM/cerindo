import React, { useEffect, useState, useContext } from "react";
import { businessService } from "../service/Business";
import Banner from "../components/Banner";
import ResourceReserveComponents from "../components/BusinessComponents/ResourceReserveComponents";
import {BannerSlider} from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { langContext } from '../langContext';
import { BusinessTitle } from '../components/BusinessComponents/BusinessLang';
const AutoplaySlider = withAutoplay(BannerSlider);

const ResourceReserve = () => {
  const { language } = useContext(langContext);
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness("5ff43dbbb9e34a0df87694ad");
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
      <ResourceReserveComponents />
    </>
  );
};

export default ResourceReserve;
