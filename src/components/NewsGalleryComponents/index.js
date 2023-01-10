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
import { NewsGallerySideBarIntl } from '../Data/NewsGalleryData/NewsGalleryData';
import { NewsGallerySidebar } from './NewsGalleryLang';

const NewsGallerySidebarComponents = ({page1,page2,page3,page4}) => {
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
                        <TextButton page={page1}>{NewsGallerySidebar(NewsGallerySideBarIntl, language, 0)}</TextButton>
                        <TextButton page={page2}>{NewsGallerySidebar(NewsGallerySideBarIntl, language, 1)}</TextButton>
                        <TextButton page={page3}>{NewsGallerySidebar(NewsGallerySideBarIntl, language, 2)}</TextButton>
                        <TextButton page={page4}>{NewsGallerySidebar(NewsGallerySideBarIntl, language, 3)}</TextButton>

                        <ArrowDiv>
                            {selected ? <ArrowDownLang style={{transform: "rotate(225deg)"}}/> : <ArrowDownLang/>}
                        </ArrowDiv>
                    </Dropbtn>
                    { selected ?
                    <Contentt>
                        <AboutSideBarContent page={page1} to="/Press-Release">
                            {NewsGallerySidebar(NewsGallerySideBarIntl, language, 0)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Community-Activities">
                            {NewsGallerySidebar(NewsGallerySideBarIntl, language, 1)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Gallery">
                            {NewsGallerySidebar(NewsGallerySideBarIntl, language, 2)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Publications">
                            {NewsGallerySidebar(NewsGallerySideBarIntl, language, 3)}
                        </AboutSideBarContent>
                    </Contentt>
                    : 
                    <Changed>
                        <Contentt>
                        <AboutSideBarContent page={page1} to="/Press-Release">
                            {NewsGallerySidebar(NewsGallerySideBarIntl, language, 0)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page2} to="/Community-Activities">
                            {NewsGallerySidebar(NewsGallerySideBarIntl, language, 1)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page3} to="/Gallery">
                            {NewsGallerySidebar(NewsGallerySideBarIntl, language, 2)}
                        </AboutSideBarContent>
                        <AboutSideBarContent page={page4} to="/Publications">
                            {NewsGallerySidebar(NewsGallerySideBarIntl, language, 3)}
                        </AboutSideBarContent>
                    </Contentt>
                    </Changed>
                    }
                </DropDown>
            </AboutSideBar>
        </>
    )
}

export default NewsGallerySidebarComponents;