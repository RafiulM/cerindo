import React, { useEffect, useState, useContext } from "react";
import { aboutUsService } from "../../../../service/Aboutus";
import { Link, useParams } from "react-router-dom";
import { Aboutstyle, AboutMain } from "../../../AboutUsComponents/AboutUsElements";
import { langContext } from "../../../../langContext";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { MagContainer, PdfContainer, PublicationDetailContainer } from "../PublicationsElements";


const PublicationsDetail = () => {
    const { id } = useParams()
    const { language } = useContext(langContext);
    const [publicationsDetail, setPublicationsDetail] = useState([]);

    const fetchPublicationsDetail = async () => {
        const response = await aboutUsService.getPublicationsDetail(id);
        const data = response.data;
        setPublicationsDetail(data);
    };

    useEffect(() => {
        fetchPublicationsDetail();
    }, [id]);

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

    if (publicationsDetail.length === 0) return null;

    return (
        <>
            <Aboutstyle>
                <PublicationDetailContainer>
                    <MagContainer>
                        <h2>{publicationsDetail.title_en}</h2>
                        <PdfContainer>
                            <Document file={publicationsDetail.file.url} onLoadSuccess={onDocumentLoadSuccess}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "8px",
                                }}>
                                    {/* <Page pageNumber={pageNumber} /> */}
                                    {Array.apply(null, Array(numPages))
                                        .map((x, i) => i + 1)
                                        .map(page => <Page pageNumber={page} />)}
                                </div>
                            </Document>
                        </PdfContainer>
                        {/* <p>
                            Page {pageNumber} of {numPages}
                        </p>
                        {pageNumber > 1 &&
                            <button onClick={changePageBack}>Previous Page</button>
                        }
                        {
                            pageNumber < numPages &&
                            <button onClick={changePageNext}>Next Page</button>
                        } */}
                    </MagContainer>

                </PublicationDetailContainer>
            </Aboutstyle>
        </>
    );
};
export default PublicationsDetail;
