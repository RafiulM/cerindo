import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  BusinessMain,
  BusinessWrited,
} from "../BusinessElements";
import BusinessSideBarComponents from "../index";
import { HPALContent } from "../../Data/BusinessData/HPALDatas";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import { NickleCobaltLangBody, NickleCobaltLangTitle } from "./NickleCobaltHPALLang";

const NickelCobaltHPALComponents = () => {
  const { language } = useContext(langContext);
  const [nickelCobalt, setNickelCobalt] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "5ff43e06b9e34a0df87694ae"
      );
      const data = response.data;
      setNickelCobalt(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Businessstyle>
        <BusinessSideBarComponents page4={true} />
        <BusinessMain>
          <BusinessWrited title>{NickleCobaltLangTitle(nickelCobalt, language)}</BusinessWrited>
          <BusinessWrited>
            {NickleCobaltLangBody(nickelCobalt, language)}
          </BusinessWrited>
        </BusinessMain>
      </Businessstyle>
    </>
  );
};
export default NickelCobaltHPALComponents;
