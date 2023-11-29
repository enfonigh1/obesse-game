import React from "react";
import HomeHero from '../components/HomeHero';
import AvailableGames from '../components/Available/AvailableGames';
import OurGames from '../components/OurGames';
import OurReview from '../components/OurReview'
import EventsPromosAndUpdates from "../components/EventsPromosAndUpdates";
import Suscribe from '../components/Suscribe';
import Footer from '../components/Footer' 

const Main = () => (
  <>
  <HomeHero />
  <AvailableGames />
  <OurGames/>
  <OurReview />
  <EventsPromosAndUpdates />
  <Suscribe />
  <Footer />
  </>
);

export default Main;
