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
} from "./AboutUsElements";
import { langContext } from '../../langContext';
import { AboutUsSidebar } from './AboutUsLang';
import { AboutUsIntl } from '../Data/AboutusData/AboutUsData';

const AboutSideBarComponents = ({page1,page2,page3,page4,page5,page6,page7,page8,page9}) => {
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
                        <TextButton page={page1}>{AboutUsSidebar(AboutUsIntl, language, 0)}</TextButton>
                        <TextButton page={page2}>{AboutUsSidebar(AboutUsIntl, language, 1)}</TextButton>
                        <TextButton page={page3}>{AboutUsSidebar(AboutUsIntl, language, 2)}</TextButton>
                        <TextButton page={page4}>{AboutUsSidebar(AboutUsIntl, language, 3)}</TextButton>
                        <TextButton page={page5}>{AboutUsSidebar(AboutUsIntl, language, 4)}</TextButton>
                        <TextButton page={page6}>{AboutUsSidebar(AboutUsIntl, language, 5)}</TextButton>
                        <TextButton page={page7}>{AboutUsSidebar(AboutUsIntl, language, 6)}</TextButton>

                        <ArrowDiv>
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ?
                    <Contentt>
                        <AboutSideBarContent page={page1} to="/Mission-Vision">
                            {AboutUsSidebar(AboutUsIntl, language, 0)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Commitment">
                            {AboutUsSidebar(AboutUsIntl, language, 1)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Subsidiary">
                            {AboutUsSidebar(AboutUsIntl, language, 2)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page6} to="/History-Milestone">
                            {AboutUsSidebar(AboutUsIntl, language, 3)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page7} to="/Licenses-Concession">
                            {AboutUsSidebar(AboutUsIntl, language, 4)}
                        </AboutSideBarContent>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <AboutSideBarContent page={page1} to="/Mission-Vision">
                            {AboutUsSidebar(AboutUsIntl, language, 0)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Commitment">
                            {AboutUsSidebar(AboutUsIntl, language, 1)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Subsidiary">
                            {AboutUsSidebar(AboutUsIntl, language, 2)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page6} to="/History-Milestone">
                            {AboutUsSidebar(AboutUsIntl, language, 3)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page7} to="/Licenses-Concession">
                            {AboutUsSidebar(AboutUsIntl, language, 4)}
                        </AboutSideBarContent>
                    </Contentt>
                    </Changed>
                    }
                </DropDown>
            </AboutSideBar>
        </>
    )
}

export default AboutSideBarComponents;