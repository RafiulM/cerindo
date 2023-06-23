import React, { useState, useContext, useEffect } from "react";
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
  AboutUsDropdown
} from '../Data/NavbarData/NavbarData';
import { SideBarLang, SideBarDropDown } from './SideBarLang';
import getFlagUrl from "../NavBar/getFlagURL";
import { setLang } from "../NavBar";
import {
  Item,
  Flag,
} from "../NavBar/NavbarElements"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  ArrowDownLang,
  DropDown,
  Dropbtn,
  DropDownContent,
  ASidebarLink,
} from "./SideBarElements";

import { langContext } from "../../langContext";
export let setLangMobile = null;

function Menu({ items, value, onChange, placeholder, showFlag }) {
  const [selected, setSelected] = useState(value || null);
  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected, onChange]);
  console.log(setLangMobile);

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
const Sidebar = ({ isOpen, toggle }) => {
  const [val2, setVal2] = useState("en");
  const { language, setLanguage } = useContext(langContext);
  setLangMobile = val2;
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            <SideBtnWrap>
              {SideBarLang(Home, val2)}
            </SideBtnWrap>
          </SidebarLink>

          <DropDown role="button" tabIndex={-1}>
            <Dropbtn>
              {SideBarLang(Business, val2)}
            </Dropbtn>
            <DropDownContent>
              <SidebarLink to="/Nickel-Ore-Mining" onClick={toggle}>
                {SideBarDropDown(BusinessOne, 0, val2)}
              </SidebarLink>
              <SidebarLink to="/Nickel-Cobalt-HPAL" onClick={toggle}>
                {SideBarDropDown(BusinessOne, 1, val2)}
              </SidebarLink>
              <SidebarLink to="/Ferronickel-Smelting" onClick={toggle}>
                {SideBarDropDown(BusinessOne, 2, val2)}
              </SidebarLink>
              <SidebarLink to="/Resource-Reserve" onClick={toggle}>
                {SideBarDropDown(BusinessOne, 3, val2)}
              </SidebarLink>
              <SidebarLink to="/Ore-Export" onClick={toggle}>
                {SideBarDropDown(BusinessTwo, 0, val2)}
              </SidebarLink>
              <SidebarLink to="/Power-Supply" onClick={toggle}>
                {SideBarDropDown(BusinessTwo, 1, val2)}
              </SidebarLink>
              <SidebarLink to="/Port-Operations" onClick={toggle}>
                {SideBarDropDown(BusinessTwo, 2, val2)}
              </SidebarLink>
            </DropDownContent>
          </DropDown>

          <DropDown role="button" tabIndex={-1}>
            <Dropbtn>
              {SideBarLang(Sustainibility, val2)}
            </Dropbtn>
            <DropDownContent>
              <SidebarLink to="/QHSE" onClick={toggle}>
                {SideBarDropDown(SustainabilityDropdown, 0, val2)}
              </SidebarLink>
              <SidebarLink to="/Reports" onClick={toggle}>
                {SideBarDropDown(SustainabilityDropdown, 2, val2)}
              </SidebarLink>
              <SidebarLink to="/Awards" onClick={toggle}>
                {SideBarDropDown(SustainabilityDropdown, 3, val2)}
              </SidebarLink>
            </DropDownContent>
          </DropDown>

          <DropDown role="button" tabIndex={-1}>
            <Dropbtn>
              {SideBarLang(AboutUs, val2)}
            </Dropbtn>
            <DropDownContent>
              <SidebarLink to="/Mission-Vision" onClick={toggle}>
                {SideBarDropDown(AboutUsDropdown, 0, val2)}
              </SidebarLink>
              <SidebarLink to="/Commitment" onClick={toggle}>
                {SideBarDropDown(AboutUsDropdown, 1, val2)}
              </SidebarLink>
              <SidebarLink to="/Subsidiary" onClick={toggle}>
                {SideBarDropDown(AboutUsDropdown, 2, val2)}
              </SidebarLink>
              <SidebarLink to="/History-Milestone" onClick={toggle}>
                {SideBarDropDown(AboutUsDropdown, 3, val2)}
              </SidebarLink>
              <SidebarLink to="/Licenses-Concession" onClick={toggle}>
                {SideBarDropDown(AboutUsDropdown, 4, val2)}
              </SidebarLink>
            </DropDownContent>
          </DropDown>
          <DropDown role="button" tabIndex={-1}>
            <Dropbtn>
              {SideBarLang(NewsGallery, val2)}
            </Dropbtn>
            <DropDownContent>
              <SidebarLink to="/Press-Release" onClick={toggle}>
                {SideBarDropDown(NewsGalleryDropdown, 0, val2)}
              </SidebarLink>
              <SidebarLink to="/Community-Activities" onClick={toggle}>
                {SideBarDropDown(NewsGalleryDropdown, 1, val2)}
              </SidebarLink>
              <SidebarLink to="/Gallery" onClick={toggle}>
                {SideBarDropDown(NewsGalleryDropdown, 2, val2)}
              </SidebarLink>
              <SidebarLink to="/Publications" onClick={toggle}>
                {SideBarDropDown(NewsGalleryDropdown, 3, val2)}
              </SidebarLink>
            </DropDownContent>
          </DropDown>
          <ASidebarLink href="https://job.cerindocorp.id/" onClick={toggle}>
            <SideBtnWrap>
              {SideBarLang(Career, val2)}
            </SideBtnWrap>
          </ASidebarLink>
        </SidebarMenu>
        {/* 
          <SidebarRoute to="/register" onClick={toggle}>
            Register
          </SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
      <Menu
        value={val2}
        onChange={setVal2}
        showFlag
        placeholder="select language"
        items={["en", "cn", "id"]}
      />
    </SidebarContainer>
  );
};

export default Sidebar;