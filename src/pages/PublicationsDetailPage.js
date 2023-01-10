import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../service/Aboutus";
import Banner from "../components/Banner";
import GalleryComponents from "../components/NewsGalleryComponents/GalleryComponents";
import { langContext } from '../langContext';
import { NewsGalleryTitle } from '../components/NewsGalleryComponents/NewsGalleryLang';
import PublicationsDetail from "../components/NewsGalleryComponents/PublicationsComponents/PublicationsDetails";

const PublicationsDetailPage = () => {
  const { language } = useContext(langContext);
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await aboutUsService.getListAboutUs();
      const data = response.data;
      setGallery(data.gallery);
    };
    fetchData();
  }, []);
  if (gallery.length === 0) return null;
  return (
    <>
      {/* {gallery.banner.map((data, idx) => {
        return (
          <Banner img={data.url} texted={true} key={idx} place={NewsGalleryTitle(language)} />
        );
      })} */}
      <PublicationsDetail/>
    </>
  );
};

export default PublicationsDetailPage;
