import React, { useEffect, useState, useContext } from "react";
import { footerService } from "../../service/Footer";
import {
  FaFacebook,
  FaInstagram,
  FaLanguage,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterLinked,
  FooterLinkWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  NavLogo,
  Logo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import image from "../../images/logo.png";
import { langContext } from "../../langContext";
import { FooterData, FooterDataSingle } from "./FooterLang";
import {
  BusinessTwo,
  Inquiry,
  ContactUs,
  SocialNetworks,
  AboutUsFooter,
  BusinessFooter,
  SustainabilityFooter,
  JakartaOffice,
  MakassarOffice,
  AboutUsDropdown,
  BusinessOne,
  SustainabilityDropdown,
  Copyright,
} from "../Data/NavbarData/NavbarData";
import { setLang } from "../NavBar/index";
import { setLangMobile } from "../SideBar/index";

const Footer = () => {
  let footerLang = null;
  const [footerData, setFooterData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await footerService.getFooter();
      const data = response.data;
      setFooterData(data);
    };
    fetchData();
  }, []);

  if (window.innerWidth < 960) {
    footerLang = setLangMobile;
  } else {
    footerLang = setLang;
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <NavLogo>
                <Logo src={image} />
              </NavLogo>
              <FooterLinkTitle>
                {FooterDataSingle(SocialNetworks, footerLang)}
              </FooterLinkTitle>
              <SocialIcons>
                <SocialIconLink
                  href={footerData.facebook}
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href={footerData.instagram}
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href={footerData.youtube}
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href={footerData.linkedin}
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/Contact-Us"
              >
                <FooterLinkTitle>
                  {FooterDataSingle(ContactUs, footerLang)}
                </FooterLinkTitle>
              </Link>
              <FooterLinkTitle>
                {FooterDataSingle(Inquiry, footerLang)}
              </FooterLinkTitle>
              <FooterLinked>
                <MdEmail /> info@cerindocorp.com
              </FooterLinked>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                {FooterDataSingle(JakartaOffice, footerLang)}
              </FooterLinkTitle>
              <FooterLinked>
                South Quarter Tower A 5th Floor <br />
                Jl. RA Kartini Kav 8 Cilandak <br />
                Jakarta 12430 Indonesia <br />
                Phone +62 21 2276 9324 <br />
              </FooterLinked>
              <FooterLinkTitle>
                {FooterDataSingle(MakassarOffice, footerLang)}
              </FooterLinkTitle>
              <FooterLinked>
                Jl. Kima 12 Kav. N-1a <br />
                Kawasan Industrial Makassar <br />
                Makassar 90245 Indonesia <br />
                Phone +62 411 472 0747 <br />
              </FooterLinked>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                {FooterDataSingle(AboutUsFooter, footerLang)}
              </FooterLinkTitle>
              <FooterLink to="/Mission-Vision">
                {FooterData(AboutUsDropdown, 0, footerLang)}
              </FooterLink>
              <FooterLink to="/Commitment">
                {FooterData(AboutUsDropdown, 1, footerLang)}
              </FooterLink>
              <FooterLink to="/Subsidiary">
                {FooterData(AboutUsDropdown, 2, footerLang)}
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                {FooterDataSingle(BusinessFooter, footerLang)}
              </FooterLinkTitle>
              <FooterLink to="/Nickel-Ore-Mining">
                {FooterData(BusinessOne, 0, footerLang)}
              </FooterLink>
              <FooterLink to="/Nickel-Cobalt-HPAL">
                {FooterData(BusinessOne, 1, footerLang)}
              </FooterLink>
              <FooterLink to="/Ferronickel-Smelting">
                {FooterData(BusinessOne, 2, footerLang)}
              </FooterLink>
              <FooterLink to="/Resource-Reserve">
                {FooterData(BusinessOne, 3, footerLang)}
              </FooterLink>
              <FooterLink to="/Ore-Export">
                {FooterData(BusinessTwo, 0, footerLang)}
              </FooterLink>
              <FooterLink to="/Power-Supply">
                {FooterData(BusinessTwo, 1, footerLang)}
              </FooterLink>
              <FooterLink to="/Port-Operations">
                {FooterData(BusinessTwo, 2, footerLang)}
              </FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>
                {FooterDataSingle(SustainabilityFooter, footerLang)}
              </FooterLinkTitle>
              <FooterLink to="/QHSE">
                {FooterData(SustainabilityDropdown, 0, footerLang)}
              </FooterLink>
              <FooterLink to="/Community-Activities">
                {FooterData(SustainabilityDropdown, 1, footerLang)}
              </FooterLink>
              <FooterLink to="/Reports">
                {FooterData(SustainabilityDropdown, 2, footerLang)}
              </FooterLink>
              <FooterLink to="/Awards">
                {FooterData(SustainabilityDropdown, 3, footerLang)}
              </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights>
              {FooterDataSingle(Copyright, footerLang)}
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
