import React, { useState, useEffect, useContext } from "react";
import { FaBars } from "react-icons/fa";
import {
  Home,
  Business,
  Sustainibility,
  AboutUs,
  NewsGallery,
  Career,
  BusinessOne,
  BusinessTwo,
  SustainabilityDropdown,
  NewsGalleryDropdown,
  AboutUsDropdown,
} from "../Data/NavbarData/NavbarData";
import { NavbarLang, NavbarDropDown } from "./NavbarLang";
import image from "../../images/logo.png";
import { newsService } from "../../service/News";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  DropDownContent,
  ArrowDownLang,
  DropDown,
  Dropbtn,
  Item,
  Flag,
  Logo,
  NavDropLinks,
  DropDiv,
  NavText,
  NavbarDropdownContent,
  SearchImage,
  SearchField,
  SearchInput,
  SearchLinked,
  Nulity,
  SearchTermed,
  SearchedLinked,
  ANavLinks,
} from "./NavbarElements";

import getFlagUrl from "./getFlagURL";
import { langContext } from "../../langContext";
import { Link } from "react-router-dom";
import { setLangMobile } from "../SideBar/index";
export let setLang = null;

export function Menu({ items, value, onChange, placeholder, showFlag }) {
  const [selected, setSelected] = useState(value || null);
  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);

  return (
    <DropDown role="button" tabIndex={-1}>
      <Dropbtn>
        {showFlag ? value ? <Flag src={getFlagUrl(value)} /> : null : null}
        <ArrowDownLang />
      </Dropbtn>

      <DropDownContent>
        {items.map((row, idx) => (
          <Item
            role="button"
            tabIndex={idx + 1}
            onClick={() => setSelected(row)}
          >
            {showFlag && <Flag src={getFlagUrl(row)} />}
          </Item>
        ))}
      </DropDownContent>
    </DropDown>
  );
}

const Navbar = ({ toggle }) => {
  const [newsList, setNewsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollNav, setScrollnav] = useState(false);
  const [searchbuttons, setSearchbuttons] = useState(true);

  const SearchedButton = () => {
    setSearchbuttons(!searchbuttons);
    setSearchTerm(false);
  };

  const changeNav = () => {
    if (window.scrollY >= 1) {
      setScrollnav(true);
    } else {
      setScrollnav(false);
    }
  };

  const fetchData = async () => {
    const response = await newsService.getListNews();
    const data = response.data;
    setNewsList(data);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    SearchedButton();
    fetchData();
  }, []);

  let [val1, setValue1] = useState("en");
  const { language, setLanguage } = useContext(langContext);
  if (window.innerWidth < 1080) {
    val1 = setLangMobile;
  } else {
    setLang = val1;
  }
  setLanguage(val1);
  if (newsList.length === 0) return null;
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <Logo src={image} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">{NavbarLang(Home, language)}</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Nickel-Ore-Mining">
                {NavbarLang(Business, language)}
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavDropLinks to="/Nickel-Ore-Mining">
                      {NavbarDropDown(BusinessOne, 0, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Nickel-Cobalt-HPAL">
                      {NavbarDropDown(BusinessOne, 1, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Ferronickel-Smelting">
                      {NavbarDropDown(BusinessOne, 2, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Resource-Reserve">
                      {NavbarDropDown(BusinessOne, 3, language)}
                    </NavDropLinks>
                  </DropDiv>
                  <DropDiv>
                    <NavDropLinks to="/Ore-Export">
                      {NavbarDropDown(BusinessTwo, 0, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Power-Supply">
                      {NavbarDropDown(BusinessTwo, 1, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Port-Operations">
                      {NavbarDropDown(BusinessTwo, 2, language)}
                    </NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/QHSE">
                {NavbarLang(Sustainibility, language)}
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavDropLinks to="/QHSE">
                      {NavbarDropDown(SustainabilityDropdown, 0, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Reports">
                      {NavbarDropDown(SustainabilityDropdown, 2, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Awards">
                      {NavbarDropDown(SustainabilityDropdown, 3, language)}
                    </NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Mission-Vision">
                {NavbarLang(AboutUs, language)}
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavDropLinks to="/Mission-Vision">
                      {NavbarDropDown(AboutUsDropdown, 0, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Commitment">
                      {NavbarDropDown(AboutUsDropdown, 1, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Subsidiary">
                      {NavbarDropDown(AboutUsDropdown, 2, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Board-of-Director">
                      {NavbarDropDown(AboutUsDropdown, 3, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Organization-Structure">
                      {NavbarDropDown(AboutUsDropdown, 4, language)}
                    </NavDropLinks>
                  </DropDiv>
                  <DropDiv>
                    <NavDropLinks to="/History-Milestone">
                      {NavbarDropDown(AboutUsDropdown, 5, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Licenses-Concession">
                      {NavbarDropDown(AboutUsDropdown, 6, language)}
                    </NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Press-Release">
                {NavbarLang(NewsGallery, language)}
                <NavbarDropdownContent>
                  <DropDiv>
                    <NavDropLinks to="/Press-Release">
                      {NavbarDropDown(NewsGalleryDropdown, 0, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Community-Activities">
                      {NavbarDropDown(NewsGalleryDropdown, 1, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Gallery">
                      {NavbarDropDown(NewsGalleryDropdown, 2, language)}
                    </NavDropLinks>
                    <NavDropLinks to="/Publications">
                      {NavbarDropDown(NewsGalleryDropdown, 3, language)}
                    </NavDropLinks>
                  </DropDiv>
                </NavbarDropdownContent>
              </NavLinks>
            </NavItem>
            <NavItem>
              <ANavLinks href="https://job.cerindocorp.id" >{NavbarLang(Career, language)}</ANavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <Menu
              value={val1}
              onChange={setValue1}
              showFlag
              placeholder="select language"
              items={["en", "cn", "id"]}
            />
            <SearchImage onClick={SearchedButton} />
            {searchbuttons ? (
              <SearchField scrollNav={scrollNav}>
                <SearchInput
                  type="search"
                  placeholder="Type Anything Here....."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
              </SearchField>
            ) : (
              <Nulity></Nulity>
            )}
            {searchTerm ? (
              <SearchTermed>
                {newsList
                  .filter((val) => {
                    if (
                      val.title_en
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val, key) => {
                    return (
                      <SearchLinked
                        to={"/News/" + val._id}
                        onClick={SearchedButton}
                      >
                        <SearchedLinked>{val.title_en}</SearchedLinked>
                      </SearchLinked>
                    );
                  })}
              </SearchTermed>
            ) : (
              <Nulity></Nulity>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
