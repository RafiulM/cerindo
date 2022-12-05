import styled from "styled-components";
import {Link as LinkR} from "react-router-dom";

export const Businessstyle = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    width: 85%;
    @media screen and (max-width: 810px) {
        flex-direction: column;
        margin: 0 auto;
    }
`;

export const BusinessSideBar = styled.div`
    flex-basis: 15%; 
    margin-top: 55px;
    justify-content:center;
    text-align:center;
    flex-direction: column;
    h1 {
        font-size: 18px;
        line-height: 30px;
        color: #111111;
        font-weight: bold;
    }
    @media screen and (max-width: 810px) {
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        margin-top: 30px;
        h1 {
            display: none;
        }
    }
`;

export const BusinessSideBarImage = styled.div`
    margin: 5px 0 20px;
    width: 160px;
    height: 112px;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 810px) {
        margin: 0 auto;
        width: 100%;
        height: 60%;
        border-bottom: 6px solid white;
    }
`;

export const BusinessSideBarContent = styled(LinkR)`
    display: flex;
    align-self: flex-end;
    flex-direction: column-reverse;
    justify-content:center;
    background: ${(props)=>(props.page ? "linear-gradient(90deg, #EFB401 -5.04%, rgba(239, 180, 1, 0) 69.56%)" : "rgba(33, 33, 33, 0.6);")};
    height: 100%;
    line-height: 25px;
    padding: 5px;
    text-decoration: none;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    &:hover{
        background: ${(props)=>(props.page ? "linear-gradient(90deg, #EFB401 -5.04%, rgba(239, 180, 1, 0) 69.56%)" : "linear-gradient(90deg, black -5.04%, rgba(239, 180, 1, 0) 69.56%)")};
    }
`;

export const BusinessMain = styled.div`
    flex-basis: 65%;
    margin: 12px 60px 10px;
    @media screen and (max-width: 810px) {
        margin: 10px auto;
    }
`;

export const BusinessWrited = styled.div`
    font-weight: ${(props) => (props.title ? "bold" : "normal")};
    font-size: ${(props) => (props.title ? "30px" : "15px")};
    line-height: 25px;
    color: #111111;
    white-space: pre-line;  
    vertical-align: bottom;
    margin-top:${(props) => (props.title ? "8px" : "30px")};
    text-align: ${(props) => (props.title ? "left" : "justify")};
    & img{
      width:100%;
    }
    & ul{
      padding:10px 25px;
    }
    @media screen and (max-width: 810px) {
        text-align: ${(props) => (props.title ? "center" : "justify")};
    }
`;

export const ArrowDiv = styled.div`
display: none;
@media screen and (max-width: 810px) {
  width: 35%;
  display: flex;
  justify-content: flex-end;
  align-self: center;
}
`;

export const ArrowDownLang = styled.div`
display: none;
@media screen and (max-width: 810px) {
  border: solid white;
  /* color: #333; */
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
  position: relative;
  margin-bottom: 4px;
  /* right: 100px; */
  /* top: 20px; */
  /* margin-right: 10px;
   
  /* right: 0px;
  left: 6px; */
  top: -2px;
  transition: all 0.6s;
  align-self: flex-end;
}
`;

export const TextButton = styled.p`
display: none;
@media screen and (max-width: 810px) {
    display: ${(props) => (props.page ? "block" : "hidden")};
  width: 90%;
  text-align: left;
}
`;
export const DropDown = styled.div`
display: block;
outline: none;
@media screen and (max-width: 810px) {
  margin-bottom: 32px;
  background-color: #EFB401;
  display: inline-block;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  > * {
    cursor: pointer;
  }

  &:focus,
  &:active {
    /* background-color: rgba(0, 0, 0, 0.1); */
    border: none;
    outline: none;
  }
  & ${ArrowDownLang} {
    transform: rotate(45deg);
  }

  &:focus ${BusinessSideBar}, &:active ${BusinessSideBar} {
    display: block;
    max-width: 100vw;
    height: 100%;
    transition: height .2s;
    transform: scaleY(1);
  }

  &:hover {
    color: #333;
  }
}
`;
export const Dropbtn = styled.div`
display: none;
@media screen and (max-width: 810px) {
  color: #fff;
  display: flex;
  text-align: center;
  flex-direction: row;
  padding: 14px 16px;
  text-decoration: none;
  border: none;
  /* border: 1px solid;
    border-radius: 5px; */
}
`;

export const Contentt = styled.div`
@media screen and (max-width: 810px) {
    background-color: #f5f5f5;
    borderRadius: 0 0 10px 10px;
    padding:10px;
  }
`;
export const Changed = styled.div`
@media screen and (max-width: 810px) {
    display: none;
  }
`;

export const ImageBusiness = styled.img`
  margin: 17px auto 20px;
  max-width: 90%;
`;

export const Resve = styled.div`
  width: 100%;
  overflow-x: scroll;
`;

export const ResveImage = styled.img`
  min-width: 500px;
  max-width: 700px;
`;