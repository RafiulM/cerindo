import React, { useState, useEffect, useContext } from "react";
import { Aboutstyle, AboutMain, UnderCons } from "../AboutUsElements";
import { BODContentData, BODMTitleData } from "../../Data/AboutusData/BODDatas";
import { aboutUsService } from "../../../service/Aboutus";
import AboutSideBarComponents from "../index";
import {
  Bodwrapped,
  Bodbox,
  BodBoxContent,
  BodBoxIntro,
  BODTitle,
  BodBoxIntroTitle,
  BodDescriptionContent,
  Masonries,
  TheKing,
  ContentDiv,
  KingBox,
  DropDown,
  Dropbtn,
  DropDownContent,
  ContentDiv2,
  BodGrid,
  ContentDrop,
  ButtonCloser,
  FlexBod,
  WritedFlex,
} from "./BODElements";

import { langContext } from "../../../langContext";
import { BODlang, BODMTitleLang, BODTitleLang, UnderConsLang } from "./BODlang";
import { UnderConsData } from "../../Data/AboutusData/UnderConstructionDatas";

const BODComponents = () => {
  const { language } = useContext(langContext);
  const [BOD, setBOD] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      console.log(data);
      setBOD(data.boardOfDirectors);
    };
    fetchData();
  }, []);

  if (BOD.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <AboutSideBarComponents page4={true} />
        <AboutMain>
          <Bodwrapped>
            <BODTitle>{BODMTitleLang(BODMTitleData, language, 0)}</BODTitle>
            {/* <UnderCons><p>{UnderConsLang(UnderConsData, language, 0)}</p>
            </UnderCons> */}
            <TheKing>
              {BOD.listBoardOfDirectors.map((data, idx) => {
                if (idx == 0) {
                  return (
                    <KingBox key={idx}>
                      <BodBoxContent>
                        <BodBoxIntro>
                          <img src={data.picture.url} height={`271px`} />
                          <div>
                            <BodBoxIntroTitle title>
                              {data.name}
                            </BodBoxIntroTitle>
                            <BodBoxIntroTitle>
                              {BODTitleLang(data, language)}
                            </BodBoxIntroTitle>
                          </div>
                        </BodBoxIntro>
                        <DropDown role="button" tabIndex={-1} key={idx}>
                          <DropDownContent>
                            <ContentDrop>
                              <ContentDiv2>
                                <ButtonCloser />
                              </ContentDiv2>
                              <BodBoxIntro change>
                                <FlexBod>
                                  <img src={data.picture.url} height={`271px`} />
                                  <WritedFlex>
                                    <BodBoxIntroTitle title>
                                      {data.name}
                                    </BodBoxIntroTitle>
                                    <BodBoxIntroTitle>
                                      {BODTitleLang(data, language)}
                                    </BodBoxIntroTitle>
                                  </WritedFlex>
                                </FlexBod>
                              </BodBoxIntro>
                              <BodDescriptionContent>
                                {BODlang(data, language)}
                              </BodDescriptionContent>
                            </ContentDrop>
                          </DropDownContent>
                          <Dropbtn>
                            <ContentDiv>Read More</ContentDiv>
                          </Dropbtn>
                        </DropDown>
                      </BodBoxContent>
                    </KingBox>
                  );
                }
              })}
            </TheKing>
            <BodGrid>
              {BOD.listBoardOfDirectors.map((data, idx) => {
                if (idx < 6 && idx > 0) {
                  return (
                    <Bodbox key={idx}>
                      <BodBoxContent>
                        <BodBoxIntro>
                          <img src={data.picture.url} height={`271px`} />
                          <div>
                            <BodBoxIntroTitle title>
                              {data.name}
                            </BodBoxIntroTitle>
                            <BodBoxIntroTitle>
                              {BODTitleLang(data, language)}
                            </BodBoxIntroTitle>
                          </div>
                        </BodBoxIntro>
                        <DropDown role="button" tabIndex={-1} key={idx}>
                          <DropDownContent>
                            <ContentDrop>
                              <ContentDiv2>
                                <ButtonCloser />
                              </ContentDiv2>
                              <BodBoxIntro change>
                                <FlexBod>
                                  <img src={data.picture.url} height={`271px`}  />
                                  <WritedFlex>
                                    <BodBoxIntroTitle title>
                                      {data.name}
                                    </BodBoxIntroTitle>
                                    <BodBoxIntroTitle>
                                      {BODTitleLang(data, language)}
                                    </BodBoxIntroTitle>
                                  </WritedFlex>
                                </FlexBod>
                              </BodBoxIntro>
                              <BodDescriptionContent>
                                {BODlang(data, language)}
                              </BodDescriptionContent>
                            </ContentDrop>
                          </DropDownContent>
                          <Dropbtn>
                            <ContentDiv>Read More</ContentDiv>
                          </Dropbtn>
                        </DropDown>
                      </BodBoxContent>
                    </Bodbox>
                  );
                }
              })}
            </BodGrid>
            {/* <TheKing>
              {BOD.listBoardOfDirectors.map((data, idx) => {
                if (idx == 3) {
                  return (
                    <KingBox key={idx}>
                      <BodBoxContent>
                        <BodBoxIntro>
                          <img src={data.picture.url} width={`210px`} />
                          <div>
                            <BodBoxIntroTitle title>
                              {data.name}
                            </BodBoxIntroTitle>
                            <BodBoxIntroTitle>
                              {BODTitleLang(data, language)}
                            </BodBoxIntroTitle>
                          </div>
                        </BodBoxIntro>
                        <DropDown role="button" tabIndex={-1} key={idx}>
                          <DropDownContent>
                            <ContentDrop>
                              <ContentDiv2>
                                <ButtonCloser />
                              </ContentDiv2>
                              <BodBoxIntro change>
                                <FlexBod>
                                  <img src={data.picture.url} width={`210px`} />
                                  <WritedFlex>
                                    <BodBoxIntroTitle title>
                                      {data.name}
                                    </BodBoxIntroTitle>
                                    <BodBoxIntroTitle>
                                      {BODTitleLang(data, language)}
                                    </BodBoxIntroTitle>
                                  </WritedFlex>
                                </FlexBod>
                              </BodBoxIntro>
                              <BodDescriptionContent>
                                {BODlang(data, language)}
                              </BodDescriptionContent>
                            </ContentDrop>
                          </DropDownContent>
                          <Dropbtn>
                            <ContentDiv>Read More</ContentDiv>
                          </Dropbtn>
                        </DropDown>
                      </BodBoxContent>
                    </KingBox>
                  );
                }
              })}
            </TheKing> */}
            <BODTitle>{BODMTitleLang(BODMTitleData, language,1)}</BODTitle>
            <BodGrid>
              {BOD.listBoardOfDirectors.map((data, idx) => {
                if (idx > 5) {
                  return (
                    <Bodbox key={idx}>
                      <BodBoxContent>
                        <BodBoxIntro>
                          <img src={data.picture.url} height={`271px`} />
                          <div>
                            <BodBoxIntroTitle title>
                              {data.name}
                            </BodBoxIntroTitle>
                            <BodBoxIntroTitle>
                              {BODTitleLang(data, language)}
                            </BodBoxIntroTitle>
                          </div>
                        </BodBoxIntro>
                        <DropDown role="button" tabIndex={-1} key={idx}>
                          <DropDownContent>
                            <ContentDrop>
                              <ContentDiv2>
                                <ButtonCloser />
                              </ContentDiv2>
                              <BodBoxIntro change>
                                <FlexBod>
                                  <img src={data.picture.url} height={`271px`} />
                                  <WritedFlex>
                                    <BodBoxIntroTitle title>
                                      {data.name}
                                    </BodBoxIntroTitle>
                                    <BodBoxIntroTitle>
                                      {BODTitleLang(data, language)}
                                    </BodBoxIntroTitle>
                                  </WritedFlex>
                                </FlexBod>
                              </BodBoxIntro>
                              <BodDescriptionContent>
                                {BODlang(data, language)}
                              </BodDescriptionContent>
                            </ContentDrop>
                          </DropDownContent>
                          <Dropbtn>
                            <ContentDiv>Read More</ContentDiv>
                          </Dropbtn>
                        </DropDown>
                      </BodBoxContent>
                    </Bodbox>
                  );
                }
              })}
            </BodGrid>
          </Bodwrapped>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default BODComponents;
