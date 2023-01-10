import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { aboutUsService } from "../../../service/Aboutus";
import { langContext } from "../../../langContext";
import { AboutMain, Aboutstyle } from "../../AboutUsComponents/AboutUsElements";
import NewsGallerySidebarComponents from "..";
import { PublicationCard, PublicationDesc, PublicationDetails, PublicationLink, PublicationsList, PublicationTextWrap, PublicationThumbnail, PublicationTitle } from "./PublicationsElements";
import { PublicationsTitle } from "../NewsGalleryLang";


const PublicationsComponents = () => {
    const { language } = useContext(langContext);
    const [publications, setPublications] = useState([]);

    const fetchPublications = async () => {
        const response = await aboutUsService.getPublications();
        const data = response.data;
        setPublications(data);
    };

    useEffect(() => {
        fetchPublications();
    }, []);
    return (
        <Aboutstyle>
            <NewsGallerySidebarComponents page4 />
            <AboutMain>
                <PublicationTextWrap>
                    <h2 style={{ width: "auto" }}>
                        {PublicationsTitle(language)}
                    </h2>
                </PublicationTextWrap>
                <PublicationsList>
                    {publications.map((data) => (
                        <a
                            key={data.id}
                            href={`${data.file.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", }}
                        >
                            <PublicationCard>
                                <PublicationThumbnail
                                    src={data.thumbnail.url}
                                />
                                {/* <PublicationDetails>
                                    <PublicationTitle>
                                        {data.title_en}
                                    </PublicationTitle>
                                    <PublicationDesc>
                                        {data.description_en}
                                    </PublicationDesc>
                                </PublicationDetails> */}
                            </PublicationCard>
                        </a>
                    ))}
                </PublicationsList>
            </AboutMain>
        </Aboutstyle>
    )
}

export default PublicationsComponents
