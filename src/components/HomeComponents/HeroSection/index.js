import React, { useEffect, useState, useContext } from "react";

import { MdTrendingFlat } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { newsService } from "../../../service/News";
import { communityService } from "../../../service/Community";
import { homeService } from "../../../service/Homepage";

import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { HeroData } from "../../Data/HomeData";
import { FlexContainer } from "../HomeElements"
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroNewsContent,
  HeroMediaH1,
  ImgWrap,
  Img,
  HeroNewsWrap,
  HeroNewsDesc,
  HeroNewsP,
  HeroNewsTimeP,
  HeroNewsFlex,
  ViewedAll,
  TitleNewsApart,
  VideoWrapped,
  VideoTemptWrapped,
  VideoWrited,
  Angle,
  BgColoring,
  Slider,
  ReadMore,
} from "./HeroElements";
import { langContext } from "../../../langContext";
import { NewsLangTitle, NewsLangBanner } from "./HeroLang";
import { aboutUsService } from "../../../service/Aboutus";
const AutoplaySlider = withAutoplay(Slider);

const HeroSection = () => {
  const { language } = useContext(langContext);
  const [newsData, setNewsData] = useState([]);
  const [communityData, setCommunityData] = useState([]);
  const [galleryData, setGalleryData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [type, setType] = useState("news");
  const [newGalleryData, setNewGalleryData] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await newsService.getListNews();
      const data = response.data;
      setNewsData(data);
    };

    const fetchHome = async () => {
      const response = await homeService.getListHome();
      const data = response.data;
      setHomeData(data);
    };

    const fetchCommunity = async () => {
      const response = await communityService.getListCommunity();
      const data = response.data;
      setCommunityData(data);
    };
    const fetchGallery = async () => {
      const response = await aboutUsService.getPhotoGallery();
      const data = response.data;
      setGalleryData(data);
    };
    fetchGallery();
    fetchNews();
    fetchCommunity();
    fetchHome();
  }, []);

  const newData = galleryData.map((item) => {
    const { title_ch, title_id, title_en, createdAt, image, url } = item;
    const date = new Date(createdAt).toISOString().slice(0, 10);
    return {
      title_ch,
      title_id,
      title_en,
      date,
      image: image[0],
      url
    };
  });
  const sortedData = newData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const mostRecentData = sortedData[0];
  const newCombinedData = [mostRecentData, ...newsData];

  const sortedCombinedData = newCombinedData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const mostRecentCombinedData = sortedCombinedData.slice(0, 3);
  // setCombinedData(mostRecentCombinedData);


  // console.log(mostRecentCombinedData)


  const joinedData = mostRecentCombinedData

  function compareDate(a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    if (c > d) {
      return -1;
    } else if (c < d) {
      return 1;
    }
    return 0;
  }

  if (homeData.length === 0) return null;

  const sortedContent = joinedData.sort(compareDate);
  return (
    <>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={10000}
        className="aws-btn"
      >
        {homeData.hero_banner.map((data, idx) => {
          return (
            <>
              <HeroContainer img={data.banner.url} key={idx}>
                <BgColoring>
                  <HeroContent>
                    {NewsLangBanner(data, language).length > 8 ? (
                      <HeroH1 size={true}>
                        {NewsLangBanner(data, language)}
                      </HeroH1>
                    ) : (
                      <HeroH1 size={false}>
                        {NewsLangBanner(data, language)}
                      </HeroH1>
                    )}
                  </HeroContent>
                </BgColoring>
              </HeroContainer>
            </>
          );
        })}
      </AutoplaySlider>
      <HeroNewsWrap>
        <FlexContainer>
          <HeroMediaH1>Recent Update</HeroMediaH1>
          <HeroNewsFlex content>
            {sortedContent
              .filter((e, idx) => idx < 3)
              .map((data, idx) => {
                if (newsData.indexOf(data) !== -1) {
                  return (
                    <>
                      {idx > 1 ? (
                        <HeroNewsContent
                          to={`/News/${data?._id}`}
                          key={idx}
                          lastIndex
                        >
                          <ImgWrap>
                            <Img src={data?.image.url} />
                          </ImgWrap>
                          <HeroNewsDesc>
                            <HeroNewsTimeP>{data.date}</HeroNewsTimeP>
                            <HeroNewsP>{NewsLangTitle(data, language)}</HeroNewsP>
                          </HeroNewsDesc>
                          <ReadMore>Read More</ReadMore>
                        </HeroNewsContent>
                      ) : (
                        <HeroNewsContent to={`/News/${data?._id}`} key={idx}>
                          <ImgWrap>
                            <Img src={data?.image.url} />
                          </ImgWrap>
                          <HeroNewsDesc>
                            <HeroNewsTimeP>{data?.date}</HeroNewsTimeP>
                            <HeroNewsP>{NewsLangTitle(data, language)}</HeroNewsP>
                          </HeroNewsDesc>
                          <ReadMore>Read More</ReadMore>
                        </HeroNewsContent>
                      )}
                    </>
                  );
                } else {
                  return (
                    <>
                      {idx > 1 ? (
                        <HeroNewsContent
                          to={`/Community-Activity/${data?._id}`}
                          key={idx}
                          lastIndex
                        >
                          <ImgWrap>
                            <Img src={data?.image.url} />
                          </ImgWrap>
                          <HeroNewsDesc>
                            <HeroNewsTimeP>{data?.date}</HeroNewsTimeP>
                            <HeroNewsP>{NewsLangTitle(data, language)}</HeroNewsP>
                          </HeroNewsDesc>
                          <ReadMore>Read More</ReadMore>
                        </HeroNewsContent>
                      ) : (
                        <HeroNewsContent
                          to={`/Community-Activity/${data?._id}`}
                          key={idx}
                        >
                          <ImgWrap>
                            <Img src={data?.image.url} />
                          </ImgWrap>
                          <HeroNewsDesc>
                            <HeroNewsTimeP>{data?.date}</HeroNewsTimeP>
                            <HeroNewsP>{NewsLangTitle(data, language)}</HeroNewsP>
                          </HeroNewsDesc>
                          <ReadMore>Read More</ReadMore>
                        </HeroNewsContent>
                      )}
                    </>
                  );
                }
              })}
          </HeroNewsFlex>
        </FlexContainer>
      </HeroNewsWrap>
    </>
  );
};

export default HeroSection;
