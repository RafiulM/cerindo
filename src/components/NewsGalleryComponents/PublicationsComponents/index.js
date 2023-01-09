import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { aboutUsService } from "../../../service/Aboutus";
import { langContext } from "../../../langContext";
import { AboutMain, Aboutstyle } from "../../AboutUsComponents/AboutUsElements";
import NewsGallerySidebarComponents from "..";
import { PublicationCard, PublicationDesc, PublicationDetails, PublicationLink, PublicationsList, PublicationThumbnail, PublicationTitle } from "./PublicationsElements";


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
            <NewsGallerySidebarComponents page3={true} />
            <AboutMain>
                <h2>Publications</h2>
                <PublicationsList>
                    {publications.map((data, idx) => (
                        <PublicationLink>
                            <PublicationCard key={idx}>
                                <PublicationThumbnail
                                    src="https://cerindo.s3.ap-southeast-1.amazonaws.com/1_cover_Kaleidoskop_170122_8d4c2043f0.jpg"
                                />
                                <PublicationDetails>
                                    <PublicationTitle>
                                        {data.title_en}
                                    </PublicationTitle>
                                    <PublicationDesc>
                                        {data.description_en}
                                    </PublicationDesc>
                                </PublicationDetails>
                            </PublicationCard>
                        </PublicationLink>
                    ))}
                </PublicationsList>
            </AboutMain>
        </Aboutstyle>
    )
}

export default PublicationsComponents
