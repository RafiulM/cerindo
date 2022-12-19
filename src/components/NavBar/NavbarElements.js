import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { MdArrowDownward } from "react-icons/md";
import {BsSearch} from "react-icons/bs";

export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  font-size: 1 rem;
  position: sticky;
  top: 0;
  z-index: 50;
  transition: 0.8s all ease;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  /* background: "#fff"; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1366px;
`;

export const HeaderImage = styled.div`
  background-image: url(${"../../images/logo.png"});
`;

export const Logo = styled.img`
  height: 48px;
  /* margin: 15px; */

  @media screen and (max-width: 480px){
    height: 40px;
  }
`;

export const NavLogo = styled(LinkR)`
  
  /* background-color: #fff; */
  justify-self: flex-start;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1080px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #333;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const DropDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  height: 100%;
`;

export const NavbarDropdownContent = styled.div`
  border-radius: 50;
  /* margin-top: 150px; */

  display: none;

  color: #333;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 12px;
  z-index: 1;
  top: 80px;
`;

export const NavLinks = styled(LinkR)`
  font-family: 'Montserrat', sans-serif;
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.5s all ease;
  font-size: 14px;
  line-height: 17px;
  transition: 0.3s linear;
  border-bottom: 3px solid transparent;
  color: ${({ bottom }) => (bottom ? "#efb401" : "none")};

  &.active {
    border-bottom: 3px solid #efb401;
  }

  &:hover {
    color: #efb401;
    border-bottom: 3px solid #efb401;
  }

  &:hover ${NavbarDropdownContent} {
    display: flex;
  }
`;
export const ANavLinks = styled.a`
  font-family: 'Montserrat', sans-serif;
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.5s all ease;
  font-size: 14px;
  line-height: 17px;
  transition: 0.3s linear;
  border-bottom: 3px solid transparent;
  color: ${({ bottom }) => (bottom ? "#efb401" : "none")};

  &.active {
    border-bottom: 3px solid #efb401;
  }

  &:hover {
    color: #efb401;
    border-bottom: 3px solid #efb401;
  }

  &:hover ${NavbarDropdownContent} {
    display: flex;
  }
`;

export const NavText = styled.h1`
  font-family: "Montserrat-black";
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  line-height: 15px;
  padding: 0 1rem;
  height: 100%;
  margin-top: 5px;
`;

export const NavDropLinks = styled(LinkR)`
  font-family: "Montserrat";
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: left;
  text-decoration: none;
  padding: 15px 1rem;
  font-size: 12px;
  line-height: 15px;
  /* height: 100%; */
  margin: 0 10px;
  border-bottom: 1px solid #808080;

  cursor: pointer;
  color: ${({ bottom }) => (bottom ? "#efb401" : "none")};

  &:hover {
    color: #efb401;
    font-weight: bold;
    transition: 0.2s ease-in-out;
    border-bottom: 3px solid #efb401;
  }

  &:hover ${NavbarDropdownContent} {
    display: flex;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1080px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

////////////////////////////////////////
//DROPDOWN LANGUAGE
export const DropDownContent = styled.div`
  max-width: 100vw;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  /* min-width: 160px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const ArrowDownLang = styled.div`
  border: solid black;

  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  position: relative;
  left: 6px;
  top: -2px;
  transition: all 0.6s;
`;
export const DropDown = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 70px;
  > * {
    cursor: pointer;
  }

  &:focus,
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
    outline:none;
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
    color: #efb401;
  }
`;
export const Dropbtn = styled.div`
  color: #333;
  display: ${(props) => (props.search ? "flex" : "inline-block")};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  /* border: 1px solid;
  border-radius: 5px; */
  justify-content: ${(props) => (props.search ? "center" : "normal")};
`;

export const Item = styled.a`
  text-align: center;
  max-width: 100vw;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  outline: none;
  font-family: "Montserrat";
  /* border: 1px solid; */
  max-width: 90vw;
  &:hover {
    background-color: #efb401;
  }
`;

export const Flag = styled.img`
  max-width: 1.3rem;
  max-height: 1rem;
  position: relative;
  top: 2px;
  left: -4px;
`;

export const ArrowForward = styled(MdArrowDownward)`
  margin-left: 8px;
  font-size: 20px;
`;

/////Search Button
export const SearchImage = styled(BsSearch)`
  font-size: 20px;
  color: black;
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
`;

export const SearchField = styled.div`
  background: ${({ scrollNav }) => (scrollNav ? "#f9f9f9" : "transparent")};
  width: 320px;
  padding: 15px;
  display:block;
  border-radius: 0 0 8px 8px;
  margin-left:-200px;
  text-align:center;
  position: absolute;
  transition: 0.3s all linear;
  top: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 16px;
  border: 1px solid #efb401;
  font-weight: bold;
  margin-left: auto;
  border-radius: 10px;
  &:focus {
    outline: 0;
    border: 1px solid #efb401;
  }
`;

export const SearchButton = styled.button`
  width: 23%;
  cursor: pointer;
  margin-right: auto;
  padding: 16px 50px 16px 16px;
  background-color: #efb401;
  color: white;
  border: 1px solid #efb401;
  border-radius: 0 10px 10px 0;
  &:focus {
    outline: 0;
    border: 1px solid yellow;
  }
`;

export const Nulity = styled.div`
display:none;
`;

export const SearchTermed = styled.div`
  background: #f9f9f9;
  max-width: 320px;
  padding: 15px;
  display:block;
  border-radius: 0 0 8px 8px;
  margin-left:-200px;
  text-align:center;
  position: absolute;
  top: 150px;
  color: black;
  text-align: left;
  text-decoration: none;
  max-height: 300px;
  overflow-y: scroll
`;

export const SearchLinked = styled(LinkR)`
text-decoration: none;
color: black;
&:hover {
  color: #04235c;
}
`;

export const SearchedLinked = styled.div`
border-bottom: 1px solid black;
margin-bottom: 15px;
padding: 8px 0;
`;