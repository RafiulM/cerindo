import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

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
import NewsRelease from "./pages/NewRelease";
import NewsComponent from "./components/CorporateNewsComponents/NewsComponent";
import Vismis from "./pages/Vismis";
import Subsidiary from "./pages/Subsidiary";
import BOD from "./pages/BOD";
import Organization from "./pages/Organization";
import History from "./pages/History";
import Concession from "./pages/Concession";
import License from "./pages/LicensePages";
import PhaseOne from "./pages/PhaseOne";
import PhaseTwo from "./pages/PhaseTwo";
import PhaseThree from "./pages/PhaseThree";
import PhaseThreeA from "./pages/PhaseThreeA";
import PhaseLast from "./pages/PhaseLast";
import Career from "./pages/Career";
import { langContext } from "./langContext";

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
        <langContext.Provider value={{language, setLanguage}}>
          <Navbar toggle={toggle} />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Nickle-Ore-Mining" component={NickleOreMining} exact />
            <Route path="/Nickle-Cobalt-HPAL" component={NickleCobaltHPAL} exact />
            <Route path="/Ferronickle-Smelting" component={FerronickleSmelting} exact />
            <Route path="/Resource-Reserve" component={ResourceReserve} exact />
            <Route path="/Ore-Export" component={OreExport} exact />
            <Route path="/Power-Plant" component={PowerPlant} exact />
            <Route path="/News-Release" component={NewsRelease} exact />
            <Route path="/News/:title" component={NewsComponent} exact />
            <Route path="/Mission-Vision" component={Vismis} exact />
            <Route path="/Subsidiary" component={Subsidiary} exact />
            <Route path="/Board-of-Director" component={BOD} exact />
            <Route path="/Organization-Structure" component={Organization} exact />
            <Route path="/History-Milestone" component={History} exact />
            <Route path="/Concession-Area" component={Concession} exact />
            <Route path="/License-And-Award" component={License} exact />
            <Route path="/Phase/Phase 1" component={PhaseOne} exact/>
            <Route path="/Phase/Phase 2" component={PhaseTwo} exact/>
            <Route path="/Phase/Phase 3" component={PhaseThree} exact/>
            <Route path="/Phase/Phase 3a" component={PhaseThreeA} exact/>
            <Route path="/Phase/PT Ceria Cobalt Indotama" component={PhaseLast} exact/>
            <Route path="/Career" component={Career} exact/>
          </Switch>
        </langContext.Provider>

        <Footer />
      </Router>
    </>
  );
}

export default App;
