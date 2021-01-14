import React, { useState, useEffect } from "react";
import {
  Aboutstyle,
  AboutSideBar,
  AboutMain,
  AboutSideBarContent,
} from "../AboutUsElements";

import { aboutUsService } from "../../../service/Aboutus";
import { ValueData, VismisData } from "../../Data/AboutusData/VismisDatas";
import {
  VismisContent,
  VismisWrited,
  VismisApart,
  VismisImagePart,
  ValueContent,
  ValueWrite,
  Valuexp,
  Valuexpwrited,
  Angle,
} from "./VismisElements";

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
        <AboutSideBar>
          <AboutSideBarContent page to="/Mission-Vision">
            Mission, Vision and Value
          </AboutSideBarContent>
          <AboutSideBarContent to="/Subsidiary">
            Company Subsidiary
          </AboutSideBarContent>
          <AboutSideBarContent to="/Board-of-Director">
            Board of Director
          </AboutSideBarContent>
          <AboutSideBarContent to="/Organization-Structure">
            Organization Structure
          </AboutSideBarContent>
          <AboutSideBarContent to="/History-Milestone">
            History and Milestone
          </AboutSideBarContent>
          <AboutSideBarContent to="/Concession-Area">
            Concession Area
          </AboutSideBarContent>
          <AboutSideBarContent to="/License-And-Award">
            License and Award
          </AboutSideBarContent>
        </AboutSideBar>
        <AboutMain>
          <VismisContent>
            <VismisApart writed>
              <VismisWrited title>Mission</VismisWrited>
              <VismisWrited>{MVV.Mission_description}</VismisWrited>
            </VismisApart>
            <VismisApart>
              <VismisImagePart>
                <img src={MVV.MVV_images[0].url} />
              </VismisImagePart>
            </VismisApart>
          </VismisContent>
          <VismisContent>
            <VismisApart>
              <VismisImagePart misi>
                <img src={MVV.MVV_images[1].url} />
              </VismisImagePart>
            </VismisApart>
            <VismisApart writed>
              <VismisWrited title vision>
                Vision
              </VismisWrited>
              <VismisWrited vision>{MVV.Vision_Description}</VismisWrited>
            </VismisApart>
          </VismisContent>
          <ValueContent>
            <h1>Value</h1>
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
          </ValueContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default VismisComponents;
