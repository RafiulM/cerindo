import styled from "styled-components";
import { Link } from 'react-router-dom'


export const PublicationLink = styled(Link)`
    text-decoration: none;
    color: #000000;
`

export const PublicationsList = styled.div`
    display: flex;
    margin-top: 24px;
`;

export const PublicationThumbnail = styled.img`
    height : 420px;
    width : auto;
    border-radius: 16px;
    transition: all 300ms;

`
export const PublicationCard = styled.div`
    display : flex ;
    width: auto;
    flex-direction: column ;
    gap: 16px;
    &:hover ${PublicationThumbnail} {
        transform: scale(1.02);
}
`


export const PublicationTitle = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`
export const PublicationDesc = styled.p`
    font-size: 16px;
    text-align: center;
`

export const PublicationDetails = styled.p`
    display: flex;
    flex-direction: column ;
    gap: 2px;
`

export const PublicationDetailContainer = styled.div`
    display: flex;
    max-width: 700px;
    /* padding: 0 32px; */
    margin: 0 auto;
`

export const MagContainer = styled.div`
    display: flex;
    flex-direction : column;
    width : 100%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden ;
    align-items: center;
`

export const PdfContainer = styled.div`
    display: flex;
    height: 100%;
    width: auto;
`