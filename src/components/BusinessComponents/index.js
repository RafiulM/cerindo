import React,{ useState, useEffect, useContext } from "react";
import {
    AboutSideBar,
    AboutSideBarContent,
    ArrowDiv,
    ArrowDownLang,
    TextButton,
    DropDown,
    Dropbtn,
    Contentt,
    Changed
} from "../AboutUsComponents/AboutUsElements";
import { langContext } from '../../langContext';
import { BusinessSideBarIntl } from '../Data/BusinessData/BussinessDatas';
import { BusinessSidebar } from './BusinessLang';

const BusinessSideBarComponents = ({page1,page2,page3,page4,page5,page6,page7,page8}) => {
    const { language } = useContext(langContext);
    const [selected, setSelected] = useState(true);

    const Clickit = ()=>{
        setSelected(!selected);
    }

    useEffect(()=>{
        Clickit()
    },[])
    return(
        <>
            <AboutSideBar>
                <DropDown tabIndex={-1}>
                    <Dropbtn onClick={Clickit}>
                        <TextButton page={page1}>{BusinessSidebar(BusinessSideBarIntl, language, 0)}</TextButton>
                        <TextButton page={page2}>{BusinessSidebar(BusinessSideBarIntl, language, 1)}</TextButton>
                        <TextButton page={page3}>{BusinessSidebar(BusinessSideBarIntl, language, 2)}</TextButton>
                        <TextButton page={page4}>{BusinessSidebar(BusinessSideBarIntl, language, 3)}</TextButton>
                        <TextButton page={page5}>{BusinessSidebar(BusinessSideBarIntl, language, 4)}</TextButton>
                        <TextButton page={page6}>{BusinessSidebar(BusinessSideBarIntl, language, 5)}</TextButton>
                        <TextButton page={page7}>{BusinessSidebar(BusinessSideBarIntl, language, 6)}</TextButton>
                        <TextButton page={page8}>{BusinessSidebar(BusinessSideBarIntl, language, 7)}</TextButton>

                        <ArrowDiv>
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ?
                    <Contentt>
                        <AboutSideBarContent page={page1} to="/Nickel-Ore-Mining">
                            {BusinessSidebar(BusinessSideBarIntl, language, 0)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Ferronikcel-Smelting">
                            {BusinessSidebar(BusinessSideBarIntl, language, 1)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Resource-Reserve">
                            {BusinessSidebar(BusinessSideBarIntl, language, 2)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Nickel-Cobalt-HPAL">
                            {BusinessSidebar(BusinessSideBarIntl, language, 3)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page5} to="/Battery">
                            {BusinessSidebar(BusinessSideBarIntl, language, 4)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page6} to="/Ore-Export">
                            {BusinessSidebar(BusinessSideBarIntl, language, 5)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page7} to="/Power-Supply">
                            {BusinessSidebar(BusinessSideBarIntl, language, 6)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page8} to="/Port-Operations">
                            {BusinessSidebar(BusinessSideBarIntl, language, 7)}
                        </AboutSideBarContent>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <AboutSideBarContent page={page1} to="/Nickel-Ore-Mining">
                            {BusinessSidebar(BusinessSideBarIntl, language, 0)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Ferronickel-Smelting">
                            {BusinessSidebar(BusinessSideBarIntl, language, 1)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Resource-Reserve">
                            {BusinessSidebar(BusinessSideBarIntl, language, 2)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Nickel-Cobalt-HPAL">
                            {BusinessSidebar(BusinessSideBarIntl, language, 3)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page5} to="/Battery">
                            {BusinessSidebar(BusinessSideBarIntl, language, 4)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page6} to="/Ore-Export">
                            {BusinessSidebar(BusinessSideBarIntl, language, 5)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page7} to="/Power-Supply">
                            {BusinessSidebar(BusinessSideBarIntl, language, 6)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page8} to="/Port-Operations">
                            {BusinessSidebar(BusinessSideBarIntl, language, 7)}
                        </AboutSideBarContent>
                    </Contentt>
                    </Changed>
                    }
                </DropDown>
            </AboutSideBar>
        </>
    )
}

export default BusinessSideBarComponents;
/*
import React,{ useState, useEffect } from "react";
import {
    BusinessSideBar,
    BusinessSideBarContent,
    BusinessSideBarImage,
    ArrowDiv,
    ArrowDownLang,
    TextButton,
    DropDown,
    Dropbtn,
    Contentt,
    Changed
} from "./BusinessElements";
import {BusinessAllImage} from "../Data/BusinessData/BussinessDatas";
import {businessService} from "../../service/Business";
const BusinessSideBarComponents = ({page1,page2,page3,page4,page5,page6}) => {
  const [businessImage, setBusinessImage] = useState([]);
  const [selected, setSelected] = useState(true);

  const Clickit = ()=>{
    setSelected(!selected);
  }
  useEffect(() => {
    Clickit()
    const fetchData = async () => {
      const response = await businessService.getListBusiness();
      const data = response.data;
      setBusinessImage(data);
    };
    fetchData();
  }, []);

  const callImage = (idx) => {
    return businessImage[idx].thumbnail.url;
  };
  if (businessImage.length === 0) return null;

    return(
        <>
            <BusinessSideBar>
                    <DropDown tabIndex={-1}>
                    <Dropbtn onClick={Clickit}>
                        <TextButton page={page1}>Nickel Ore Mining</TextButton>
                        <TextButton page={page2}>Ferronickel Smelting</TextButton>
                        <TextButton page={page3}>Resource and Reserve</TextButton>
                        <TextButton page={page4}>Nickel-Cobalt HPAL</TextButton>
                        <TextButton page={page5}>Jetty Terminal</TextButton>
                        <TextButton page={page6}>Power Supply</TextButton>

                        <ArrowDiv>
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ? 
                    <Contentt>
                        <h1>Mining</h1>
                        <BusinessSideBarImage img={callImage(0)}>
                            <BusinessSideBarContent page={page1} to="/Nickle-Ore-Mining">Nickel Ore Mining</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(1)}>
                            <BusinessSideBarContent page={page2} to="/Ferronickle-Smelting">Ferronickel Smelting</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(2)}>
                            <BusinessSideBarContent page={page3} to="/Resource-Reserve">Resource and Reserve</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(3)}>
                            <BusinessSideBarContent page={page4} to="/Nickle-Cobalt-HPAL">Nickel-Cobalt HPAL</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <h1>Logistic</h1>
                        <BusinessSideBarImage img={callImage(4)}>
                            <BusinessSideBarContent page={page5} to="/Jetty-Terminal">Jetty Terminal</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <h1>Energy</h1>
                        <BusinessSideBarImage img={callImage(5)}>
                            <BusinessSideBarContent page={page6} to="/Power-Supply">Power Supply</BusinessSideBarContent>
                        </BusinessSideBarImage>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <h1>Mining</h1>
                        <BusinessSideBarImage img={callImage(0)}>
                            <BusinessSideBarContent page={page1} to="/Nickle-Ore-Mining">Nickel Ore Mining</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(1)}>
                            <BusinessSideBarContent page={page2} to="/Ferronickle-Smelting">Ferronickel Smelting</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(2)}>
                            <BusinessSideBarContent page={page3} to="/Resource-Reserve">Resource and Reserve</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <BusinessSideBarImage img={callImage(3)}>
                            <BusinessSideBarContent page={page4} to="/Nickle-Cobalt-HPAL">Nickel-Cobalt HPAL</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <h1>Logistic</h1>
                        <BusinessSideBarImage img={callImage(4)}>
                            <BusinessSideBarContent page={page5} to="/Jetty-Terminal">Jetty Terminal</BusinessSideBarContent>
                        </BusinessSideBarImage>
                        <h1>Energy</h1>
                        <BusinessSideBarImage img={callImage(5)}>
                            <BusinessSideBarContent page={page6} to="/Power-Supply">Power Supply</BusinessSideBarContent>
                        </BusinessSideBarImage>
                    </Contentt>
                    </Changed>}
                    </DropDown>
            </BusinessSideBar>
        </>
    )
};
export default BusinessSideBarComponents; */
