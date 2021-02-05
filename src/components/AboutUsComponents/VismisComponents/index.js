import React, { useState, useEffect } from "react";
import { Aboutstyle, AboutMain } from "../AboutUsElements";
import AboutSideBarComponents from "../index";
import { aboutUsService } from "../../../service/Aboutus";
import { ValuesData, VismisData } from "../../Data/AboutusData/VismisDatas";
import {
  VismisContent,
  VismisWrited,
  VismisApart,
  VismisImagePart,
  ValueContent,
  ValueWrite,
  ValuePartexp,
  Valuexp,
  ValuesWrited,
  FlexValue,
  Image,
  ValueApart,
} from "./VismisElements";
import testing from "../../../images/Group 535.png";

const VismisComponents = () => {
  const [MVV, setMVV] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setMVV(data.MVV);
    };
    fetchData();
  }, []);

  if (MVV.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <AboutSideBarComponents page1={true} />
        <AboutMain>
          <VismisContent>
            <VismisApart>
              <VismisWrited title>Vision</VismisWrited>
              <VismisWrited>{MVV.Vision_Description}</VismisWrited>
              <VismisWrited title misi>
                Mission
              </VismisWrited>
              <VismisWrited>{MVV.Mission_description}</VismisWrited>
            </VismisApart>
            <VismisApart>
              <img width="245px" src={MVV.image.url} />
            </VismisApart>
          </VismisContent>
          <ValueContent>
            <h1>Value</h1>
            <ValueWrite choose>C E R I A</ValueWrite>
            {MVV.ceriaValue.map((data, idx) => {
              return (
                <FlexValue>
                  <ValueApart image>
                    <Image src={data.logo.url} />{" "}
                    {/* Isinya Foto yang di kanan */}
                  </ValueApart>
                  <ValueApart>
                    <ValuePartexp key={idx}>
                      <ValuesWrited title>{data.value}</ValuesWrited>
                      <ValuesWrited>{data.value_description}</ValuesWrited>
                    </ValuePartexp>
                  </ValueApart>
                </FlexValue>
              );
            })}
          </ValueContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default VismisComponents;

/* 
<Angle>
              {ValueData.map((data) => {
                return (
                  <div>
                    <ValueWrite>{data.valueUp}</ValueWrite>
                    <ValueWrite choose>{data.valueChoose}</ValueWrite>
                    <ValueWrite>{data.valueDown}</ValueWrite>
                    <Valuexp>
                      <Valuexpwrited title>{data.title}</Valuexpwrited>
                      <Valuexpwrited>{data.desc}</Valuexpwrited>
                    </Valuexp>
                  </div>
                );
              })}
            </Angle>
*/
