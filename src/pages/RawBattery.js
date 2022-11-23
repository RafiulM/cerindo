import React, { useEffect, useState, useContext } from "react";
import { businessService } from "../service/Business";
import Banner from "../components/Banner";
import { BannerSlider } from "../components/BannerSlider";
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { langContext } from '../langContext';
import { BusinessTitle } from '../components/BusinessComponents/BusinessLang';
import RawBatteries from "../components/BusinessComponents/RawBatteries";
const AutoplaySlider = withAutoplay(BannerSlider);

const RawBattery = () => {
  const { language } = useContext(langContext);
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
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={10000}
        className="aws-btn"
      >
        {businessList[7].banner.map((data, idx) => {
          return (<><Banner
            img={data.url}
            texted={true}
            key={idx}
            place={BusinessTitle(language)}
          /></>);
        })}</AutoplaySlider>

      <RawBatteries />
    </>
  );
};

export default RawBattery;
