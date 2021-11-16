import React from "react";
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import "aos/dist/aos.css"
import NavBar from "./components/inc/header/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrolledTop from './components/ScrolledTop';
import ScrollToTop from './components/ScrollToTop'


// import Header from './components/inc/Header'
// import Navbar from './components/inc/header/HeaderIndex'
import HomeMain from "./components/home/HomeMain";
import Footer from './components/inc/footer/Footer'
import ContactUs from './components/contact/ContactUs'
import Freights from './components/freights/Freights'
import AboutUs from './components/about/AboutUs'
import GetQuote from "./components/home/GetAquote";

function App() {
  

  return (
    <>

      <ScrollToTop/>
      <Router>
      <ScrolledTop/>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={HomeMain} />
            <Route path="/about" component={AboutUs } />
            <Route path="/freights" component={Freights} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/getQuote" component={GetQuote} />
          </Switch>
        </div>
        <Footer />
      </Router>



    {/* <HomeMain /> */}
    {/* <ContactUs/> */}
    {/* <Freights/> */}
    {/* <AboutUs/> */}
    {/* <Footer /> */}
    </>
  );
}

export default App;
