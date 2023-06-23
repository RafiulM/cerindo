import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import GlobalFonts from "./fonts/fonts";

import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/SideBar";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages";
import NickleOreMining from "./pages/NickleOreMining";
import NickleCobaltHPAL from "./pages/NickelCobaltHPAL";
import FerronickleSmelting from "./pages/FerronickleSmelting";
import ResourceReserve from "./pages/ResourceReserve";
import OreExport from "./pages/OreExport";
import PowerPlant from "./pages/PowerPlant";
import PortOperations from "./pages/PortOperations";
import NewsRelease from "./pages/NewRelease";
import NewsComponent from "./components/CorporateNewsComponents/NewsComponent";
import AlbumComponent from "./components/NewsGalleryComponents/GalleryComponents/AlbumComponents";
import JobComponents from "./components/CareerComponents/JobComponents";
import Vismis from "./pages/Vismis";
import Commitment from "./pages/Commitment";
import Subsidiary from "./pages/Subsidiary";
import History from "./pages/History";
import License from "./pages/LicensePages";
import Career from "./pages/Career";
import QHSE from "./pages/QHSE";
import Activity from "./pages/Activity";
import Reports from "./pages/Reports";
import NotFoundPage from "./pages/404Page";
import Award from "./pages/Award";
import Gallery from "./pages/Gallery";
import ActivityContentComponent from "./components/NewsGalleryComponents/ActivityComponents/ActivityContentComponents";
import ContactComponents from "./components/ContactComponents/index";
import AnnouncementPage from "./components/CorporateNewsComponents/NewsReleaseComponents/Announcement";
import { langContext } from "./langContext";
import Privacy from "./components/PrivacyComponents/Privacy";
import Publications from "./pages/Publications";
import PublicationsDetailPage from "./pages/PublicationsDetailPage";

function App() {
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <GlobalFonts />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <langContext.Provider value={{ language, setLanguage }}>
          <Navbar toggle={toggle} />
          <Route render={({location})=>(
          <TransitionGroup>
            <CSSTransition
            key={location.key}
            timeout={450}
            classNames="fade">
              <Switch location={location}>
                <Route path="/" component={Home} exact />
                <Route
                  path="/Nickel-Ore-Mining"
                  component={NickleOreMining}
                  exact
                />
                <Route
                  path="/Nickel-Cobalt-HPAL"
                  component={NickleCobaltHPAL}
                  exact
                />
                <Route
                  path="/Ferronickel-Smelting"
                  component={FerronickleSmelting}
                  exact
                />
                <Route path="/Resource-Reserve" component={ResourceReserve} exact />
                <Route path="/Ore-Export" component={OreExport} exact />
                <Route path="/Power-Supply" component={PowerPlant} exact />
                <Route path="/Port-Operations" component={PortOperations} exact />
                <Route path="/Press-Release" component={NewsRelease} exact />
                <Route path="/News/:title" component={NewsComponent} exact />
                <Route path="/Mission-Vision" component={Vismis} exact />
                <Route path="/Commitment" component={Commitment} exact />
                <Route path="/Subsidiary" component={Subsidiary} exact />
                <Route path="/History-Milestone" component={History} exact />
                <Route path="/Licenses-Concession" component={License} exact />
                <Route path="/Career" component={Career} exact />
                <Route path="/QHSE" component={QHSE} exact />
                <Route path="/Community-Activities" component={Activity} exact />
                <Route path="/Reports" component={Reports} exact />
                <Route path="/Awards" component={Award} exact />
                <Route path="/Gallery" component={Gallery} exact />
                <Route path="/Publications" component={Publications} exact />
                <Route path="/Publications/:id" component={PublicationsDetailPage} exact />
                <Route
                  path="/Community-Activity/:id"
                  component={ActivityContentComponent}
                />
                <Route path="/Announcement/:id" component={AnnouncementPage} exact />
                <Route path="/Album/:id" component={AlbumComponent} exact />
                <Route path="/Jobs/:job/:jobs" component={JobComponents} exact />
                <Route path="/Contact-Us" component={ContactComponents} exact />
                <Route path="/Privacy" component={Privacy} exact />
                <Route component={NotFoundPage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          )}/>
        </langContext.Provider>

        <Footer />
      </Router>
    </>
  );
}

export default App;
