import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../../../../service/Aboutus";
import { GalleryTitle } from "../../../Data/AboutusData/GalleryDatas";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import {
  TitleContent,
  BoxContainer,
  BlogImage,
  BlogWrapped,
  BlogApart,
  BlogDivApart,
  ArticlePart,
  Linked,
  BlogImageArt,
  GlobalContent,
} from "../../../CorporateNewsComponents/NewsComponent/NewsElements";
import {
  AlbumGrid,
  Image,
  DropDown,
  Dropbtn,
  DropDownContent,
  ContentDiv2,
  ContentDrop,
  AngleRight,
  AngleLeft,
  ButtonCloser,
  SliderRel,
  ContentDropped,
  Imagees,
  Desctit,
} from "./AlbumElements";
import { langContext } from "../../../../langContext";
import {
  GalleryLangTitle,
  GalleryLangTitlePhoto,
  AlbumLangOther,
  AlbumLangDescription,
} from "../GalleryLang";

const ManageOthArtData = ({ image, title, id, date }) => {
  return (
    <Linked to={`/Album/${id}`}>
      <BlogApart art>
        <BlogDivApart imagart>
          <BlogImageArt src={image} />
        </BlogDivApart>
        <BlogDivApart contain>
          <BoxContainer title>
            <h4>{title}</h4>
          </BoxContainer>
          <BoxContainer>
            <h6>{date}</h6>
          </BoxContainer>
        </BlogDivApart>
      </BlogApart>
    </Linked>
  );
};

const AlbumComponent = (props) => {
  const { language } = useContext(langContext);
  const [photoListGallery, setPhotoListGallery] = useState([]);
  const [photoDetailedGallery, setPhotoDetailedGallery] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [current, setCurrent] = useState(0);

  const fetchListPhoto = async () => {
    const response = await aboutUsService.getPhotoGallery();
    const data = response.data;
    setPhotoListGallery(data);
  };
  const fetchDetailedPhoto = async () => {
    const response = await aboutUsService.getDetailedPhotoGallery(
      props.match.params.id
    );
    const data = response.data;
    setPhotoDetailedGallery(data);
  };
  const Clickedout = () => {
    setCurrent(0);
    setClicked(true);
  };
  useEffect(() => {
    fetchListPhoto();
    fetchDetailedPhoto();
    Clickedout();
  }, [props.match.params.id]);

  if (photoListGallery.length === 0) return null;
  if (photoDetailedGallery.length === 0) return null;
  const lengths = photoDetailedGallery.image.length;
  const carouseleft = () => {
    setCurrent(current === lengths - 1 ? 0 : current + 1);
  };
  const carouseright = () => {
    setCurrent(current === 0 ? lengths - 1 : current - 1);
  };

  console.log(photoDetailedGallery)
  return (
    <>
      <GlobalContent>
        <BlogApart containe>
          <BlogDivApart contain>
            <TitleContent>
              {GalleryLangTitlePhoto(photoDetailedGallery, language)}
            </TitleContent>
              <ReactMarkdown
              children={AlbumLangDescription(photoDetailedGallery, language).props.children}
              plugins={[[gfm, { singleTilde: false }]]}
                  allowDangerousHtml={true}
              />
            <AlbumGrid>
              {photoDetailedGallery.image.map((val, idx) => {
                return (
                  <>
                    {clicked ? (
                      <Dropbtn
                        onClick={() => {
                          setCurrent(idx);
                          setClicked(!clicked);
                        }}
                      >
                        <Image src={val.url} />
                      </Dropbtn>
                    ) : (
                      <DropDownContent>
                        <ContentDiv2 onClick={Clickedout}>
                          <ButtonCloser />
                        </ContentDiv2>
                        <SliderRel>
                          <AngleLeft role="button" onClick={carouseright} />
                          <AngleRight role="button" onClick={carouseleft} />
                          {photoDetailedGallery.image.map((dats, index) => {
                            return (
                              <ContentDrop
                                played={index === current}
                                key={index}
                              >
                                {index === current && (
                                  <Imagees src={dats.url} />
                                )}
                              </ContentDrop>
                            );
                          })}
                        </SliderRel>
                      </DropDownContent>
                    )}
                  </>
                );
              })}
            </AlbumGrid>
          </BlogDivApart>
          <BlogDivApart>
            <TitleContent art>
              {AlbumLangOther(GalleryTitle.otherArticle, language)}
            </TitleContent>
            <ArticlePart>
              {photoListGallery.slice(-3).map((data, idx) => {
                return (
                  <ManageOthArtData
                    id={data._id}
                    key={idx}
                    image={data.image[0].url}
                    title={GalleryLangTitle(data, language)}
                  />
                );
              })}
            </ArticlePart>
          </BlogDivApart>
        </BlogApart>
      </GlobalContent>
    </>
  );
};

export default AlbumComponent;
