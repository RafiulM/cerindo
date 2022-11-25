import React, { useEffect, useState, useContext } from "react";
import {
  Businessstyle,
  ImageBusiness,
  BusinessWrited,
} from "../BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { businessService } from "../../../service/Business";
import { langContext } from "../../../langContext";
import {
  NickleCobaltLangBody,
  NickleCobaltLangTitle,
  NickleCobaltLangBody2,
} from "../NickelCobaltHPALComponents/NickleCobaltHPALLang";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const DummyComponent = () => {
  const { language } = useContext(langContext);
  const [rawBattery, setRawBattery] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await businessService.getDetailBusiness(
        "6380693ada95974fc2a2f900"
      );
      const data = response.data;
      setRawBattery(data);
    };
    fetchData();
  }, []);
  if (rawBattery.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page5={true} />
        <AboutMain>
          <BusinessWrited title>
            {NickleCobaltLangTitle(rawBattery, language)}
          </BusinessWrited>
          <BusinessWrited>
            <ReactMarkdown
              children={
                NickleCobaltLangBody(rawBattery, language).props.children
              }
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>

          <BusinessWrited>
            <ReactMarkdown
              children={
                NickleCobaltLangBody2(rawBattery, language).props.children
              }
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default DummyComponent;
