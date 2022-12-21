import React, { useState, useEffect, useContext } from "react";
import { sustainService } from "../../../service/Sustainability";
import { BusinessWrited } from "../../BusinessComponents/BusinessElements";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import BusinessSideBarComponents from "../index";
import ReactMarkdown from "react-markdown";
import {
  AwardsesContent,
  ContentAward,
  ImageAward,
  Containerrs,
  DropDown,
  Dropbtn,
  DropDownContent,
  ContentDiv2,
  ContentDrop,
  ButtonCloser,
} from "./AwardElements";
import { BoxContainer } from "../../CorporateNewsComponents/NewsReleaseComponents/NewsContentComponents/NewsContentElements";
import { langContext } from "../../../langContext";
import {
  AwardContentLangTitle,
  AwardContentLangBody,
  AwardContentLangDescription,
  AwardContentLangName,
} from "./AwardLang";
import gfm from "remark-gfm";

const AwardComponents = () => {
  const { language } = useContext(langContext);
  const [awardContent, setAwardContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await sustainService.getListSustain();
      const data = response.data.Awards;
      setAwardContent(data);
    };
    fetchData();
  }, []);

  const awardsList = [].concat(awardContent.awards_list)



// console.log(awards_list)

  const sortedAwards = awardsList.sort((a, b) => {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return d - c;
  });
  
  console.log("sorted array", sortedAwards);

  if (awardContent.length === 0) return null;
  return (
    <>
      <Aboutstyle>
        <BusinessSideBarComponents page4={true} />
        <AboutMain>
          <BusinessWrited title>
            {AwardContentLangTitle(awardContent, language)}
          </BusinessWrited>
          <BusinessWrited>
            <ReactMarkdown
              children={
                AwardContentLangBody(awardContent, language).props.children
              }
              plugins={[[gfm, { singleTilde: false }]]}
              allowDangerousHtml={true}
            />
          </BusinessWrited>
          <AwardsesContent>
            {sortedAwards.map((data, idx) => {
              return (
                <ContentAward key={idx}>
                  <BoxContainer>{data.date}</BoxContainer>
                  <BoxContainer titlee>
                    {AwardContentLangName(data, language)}
                  </BoxContainer>
                  <Containerrs>
                    <DropDown role="button" tabIndex={-1} key={idx}>
                      <Dropbtn>
                        <ImageAward src={data.image.url} />
                      </Dropbtn>
                      <DropDownContent>
                        <ContentDiv2 role="button" tabIndex={-1}>
                          <ButtonCloser />
                        </ContentDiv2>
                        <ContentDrop>
                          <img src={data.image.url} width="100%" />
                        </ContentDrop>
                      </DropDownContent>
                    </DropDown>
                    <BoxContainer>
                      <ReactMarkdown
                        children={
                          AwardContentLangDescription(data, language).props
                            .children
                        }
                        plugins={[[gfm, { singleTilde: false }]]}
                        allowDangerousHtml={true}
                      />
                    </BoxContainer>
                  </Containerrs>
                </ContentAward>
              );
            })}
          </AwardsesContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default AwardComponents;
