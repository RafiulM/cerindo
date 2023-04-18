import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../../../service/Aboutus";
import { Link } from "react-router-dom";
import { Aboutstyle, AboutMain } from "../../AboutUsComponents/AboutUsElements";
import NewsGallerySidebarComponents from "../index";
import { GalleryTitle } from "../../Data/AboutusData/GalleryDatas";
import { BsArrowRight } from "react-icons/bs"
import {
  GalleryAllContent,
  VideoGridOther,
  VideoContentMain,
  VideoContentOther,
  VideoContentPartMain,
  Figured,
  VideoContainerOther,
  ImgContainer,
  CardContent,
  ViewAlbum,
  ArrowIcon
} from "./GalleryElements";
import { langContext } from "../../../langContext";
import {
  GalleryLangTitle,
  GalleryLangParans,
  GalleryLangVideo,
  GalleryLangVideoTitle,
} from "./GalleryLang";

const GalleryComponents = () => {
  const { language } = useContext(langContext);
  const [videoGallery, setVideoGallery] = useState([]);
  const [photoGallery, setPhotoGallery] = useState([]);
  const [hover, setHover] = useState(null);
  const fetchVideo = async () => {
    const response = await aboutUsService.getVideoGallery();
    const data = response.data;
    setVideoGallery(data);
  };

  const fetchPhoto = async () => {
    const response = await aboutUsService.getPhotoGallery();
    const data = response.data;
    setPhotoGallery(data);
  };
  useEffect(() => {
    fetchVideo();
    fetchPhoto();
  }, []);

  const sortedPhoto = photoGallery.sort((a, b) => {
    var c = new Date(a.createdAt);
    var d = new Date(b.createdAt);
    return d - c;
  });

  const sortedVideo = videoGallery.sort((a, b) => {
    var c = new Date(a.createdAt);
    var d = new Date(b.createdAt);
    return d - c;
  });

  if (sortedVideo.length === 0) return null;
  if (sortedPhoto.length === 0) return null;

  return (
    <>
      <Aboutstyle>
        <NewsGallerySidebarComponents page3={true} />
        <AboutMain>
          <GalleryAllContent>
            <h2>{GalleryLangParans(GalleryTitle.profile, language)}</h2>
            <VideoContentPartMain>
              <VideoContentMain
                onMouseEnter={(e) => setHover([videoGallery.length - 1]._id)}
                onMouseLeave={(e) => setHover(null)}
                controls={hover === [videoGallery.length - 1]._id}
                src={GalleryLangVideo(videoGallery[videoGallery.length - 1], language).props.children}
                poster={videoGallery[videoGallery.length - 1]?.video_thumbnail?.url}
              />
            </VideoContentPartMain>
            <h2>{GalleryLangParans(GalleryTitle.other, language)}</h2>
            <VideoGridOther>
              {sortedVideo.map((data, idx) => {
                return (
                  <VideoContainerOther>
                    <VideoContentOther
                      onMouseEnter={(e) => setHover(data._id)}
                      onMouseLeave={(e) => setHover(null)}
                      controls={hover === data._id}
                      src={GalleryLangVideo(data, language).props.children}
                      key={idx}
                      poster={data?.video_thumbnail?.url}
                    />
                    <p>{GalleryLangVideoTitle(data, language)}</p>
                  </VideoContainerOther>
                );
              })}
            </VideoGridOther>
            <h2>Photo Gallery</h2>
            <VideoGridOther>
              {sortedPhoto.map((data, idx) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/Album/${data._id}`}
                  >
                    <Figured key={idx}>
                      <ImgContainer>
                        <img src={data.image[0].url} alt={data.title_en} />
                      </ImgContainer>
                      <CardContent>
                        <figcaption>
                          {GalleryLangTitle(data, language)}
                        </figcaption>
                        <ViewAlbum>View Album
                          <ArrowIcon><BsArrowRight />
                          </ArrowIcon>
                        </ViewAlbum>
                      </CardContent>
                    </Figured>
                  </Link>
                );
              })}
            </VideoGridOther>
          </GalleryAllContent>
        </AboutMain>
      </Aboutstyle>
    </>
  );
};
export default GalleryComponents;
