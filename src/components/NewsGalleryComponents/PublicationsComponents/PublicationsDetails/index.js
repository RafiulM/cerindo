import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../../../../service/Aboutus";
import { Link } from "react-router-dom";
import { Aboutstyle, AboutMain } from "../../../AboutUsComponents/AboutUsElements";
import NewsGallerySidebarComponents from "../../index";
import { langContext } from "../../../../langContext";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { PublicationsWrapper } from "../PublicationsElements";


const PublicationsDetail = () => {
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

    const [numPages, setNumPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1)
    }

    function changePageNext() {
        changePage(+1)
    }

    return (
        <>
            <Aboutstyle>
                <NewsGallerySidebarComponents page3={true} />
                <AboutMain>
                    <PublicationsWrapper>
                        {publications.map((data) => (
                            <div key={data.file._id}>
                                <Document file={data.file.url} onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page height={400} pageNumber={pageNumber} />
                                </Document>
                                <p>
                                    Page {pageNumber} of {numPages}
                                </p>
                                {pageNumber > 1 &&
                                    <button onClick={changePageBack}>Previous Page</button>
                                }
                                {
                                    pageNumber < numPages &&
                                    <button onClick={changePageNext}>Next Page</button>
                                }
                            </div>
                        ))}
                    </PublicationsWrapper>

                </AboutMain>
            </Aboutstyle>
        </>
    );
};
export default PublicationsDetail;
