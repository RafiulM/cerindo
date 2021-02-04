import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../../../service/Sustainability";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import { ReportDownload } from "../../Data/SustainabilityData/ReportsDatas";
import {
  ReportsFlex,
  ReportsContent,
  ReportWrited,
  ReportImage,
  TabelDownload,
  ApartContentTable,
  ContentTable,
  ButtonTable,
} from "./ReportsElements";
import { langContext } from "../../../langContext";
import { ReportsDataLangTitle, ReportsDataLangBody } from "./ReportsLang";

const ReportsComponents = () => {
  const { language } = useContext(langContext);
  const [ReportsData, setReportsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.SustainibilityReports;
      setReportsData(data);
    };
    fetchData();
  }, []);

  if (ReportsData.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page3={true} />
        <AboutMain>
          <ReportsFlex>
            <ReportsContent>
              <ReportWrited title>
                {ReportsDataLangTitle(ReportsData, language)}
              </ReportWrited>
              <ReportWrited>
                {ReportsDataLangBody(ReportsData, language)}
              </ReportWrited>
            </ReportsContent>
            <ReportsContent>
              <ReportImage>
                <img src={ReportsData.image.url} />
              </ReportImage>
            </ReportsContent>
          </ReportsFlex>
          <TabelDownload>
            {ReportsData.files.map((data, idx) => {
              if (idx % 2 == 0) {
                return (
                  <div key={idx} style={{ background: "#FAFAFA" }}>
                    <ApartContentTable content>
                      <ContentTable>{data.title_en}</ContentTable>
                    </ApartContentTable>
                    <ApartContentTable>
                      <ButtonTable href={data.file.url}>DOWNLOAD</ButtonTable>
                    </ApartContentTable>
                  </div>
                );
              } else {
                return (
                  <div key={idx} style={{ background: "#F5F5F5" }}>
                    <ApartContentTable content>
                      <ContentTable>{data.title_en}</ContentTable>
                    </ApartContentTable>
                    <ApartContentTable>
                      <ButtonTable href={data.file.url}>DOWNLOAD</ButtonTable>
                    </ApartContentTable>
                  </div>
                );
              }
            })}
          </TabelDownload>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default ReportsComponents;
