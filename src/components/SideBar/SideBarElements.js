import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #333333;
  align-items: center;
  overflow-Y: scroll;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  /* top: 0; */
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  padding: 25px;
  outline: none;
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 100%;
`;

export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  line-height: 3rem;

  &:hover {
    color: #efb401;
    transition: 0.2s ease-in-out;
  }
`;

export const ASidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  line-height: 3rem;

  &:hover {
    color: #efb401;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;
margin-bottom: 32px;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const SidebarDropContent = styled.div`
  background-color: #262323;
  display: block;
  line-hegiht: 2px;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  height: 200px;
  z-index: 999;
  overflow: scroll;
  padding: 10px 0;
`;

export const Nulity = styled.div`display:none;`

export const DropDownContent = styled.div`
  width: 100%;
  display: none;
  z-index: 1;
  padding: 16px 16px;
  background: #424242;
`;

export const ContentDiv = styled.div`
    display: block;
    font-weight: 400;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: italic;
    font-size: 13px;
    line-height: 20px;
    text-decoration: underline;
`;
export const ArrowDownLang = styled.div`
  border: solid white;

  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  position: relative;
  left: 6px;
  top: -2px;
  transition: all 0.6s;
`;
export const DropDown = styled.div`
  margin-bottom: 32px;
  display: inline-block;
  border-bottom: 1px solid #D6D6D6;
  border: none;
  cursor: pointer;
  width: 100%;
  outline: none;
  > * {
    cursor: pointer;
  }

  &:focus,
  &:active {
    /* background-color: rgba(0, 0, 0, 0.1); */
    border: none;
  }
  & ${ArrowDownLang} {
    transform: rotate(45deg);
  }

  &:focus ${ArrowDownLang}, &:active ${ArrowDownLang} {
    transform: rotate(225deg);
  }
  &:focus ${DropDownContent}, &:active ${DropDownContent} {
    display: block;
    max-width: 100vw;
  }
  &:hover {
    color: #333;
  }
`;

export const Dropbtn = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  width: 100%;
  justify-content: center;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #fff;
cursor: pointer;
`;
