import React from "react";
import { Switch, Route } from "react-router-dom";
//components
import NavBar from "./components/navbar/NavBar";
import MainHeader from "./components/header/MainHeader";
import SectionFeature from "./components/sectionFeature/SectionFeature";
import Subscribe from "./components/subscribe/Subscribe";
import FeaturedProperties from "./components/featured/FeaturedProperties";
import ContactUs from "./components/contact/ContactUs";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Properties from "./components/properties/Properties";
import Sell from "./components/sell/Sell";
import SignUp from "./components/longOn/SignUp";
import SignIn from "./components/longOn/SignIn";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/properties">
          <Properties />
        </Route>
        <Route exact path="/sell">
          <Sell />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/">
          <MainHeader />
          <SectionFeature />
          <FeaturedProperties />
          <Testimonials />
        </Route>
      </Switch>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
