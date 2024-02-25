import React from 'react';
import Meta from '../components/Meta';
import SideMenu from '../components/SideMenu';
import Hero from '../components/Hero/Hero';
import Invitation from '../components/Invitation/Invitation';
import Events from '../components/Events/Events';
import Reach from '../components/Reach/Reach';
import Timer from '../components/Timer/Timer';
import Copyright from '../components/Copyright/Copyright';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Animation from '../components/Animation/Animation';
import { motion } from 'framer-motion';

const Ladkiwale = () => {

  return (
    <motion.div key='ladkiwale'>
      <Meta title="Ladkiwale" />
      <ScrollToTopButton />
      <Animation />
      <SideMenu currentPage="bride" />
      <Hero firstName="Ipsum" secondName="Lorem" />
      <Invitation firstName="Ipsum" secondName="Lorem" firstParents="(D/o Mrs. Ipsum &amp; Mr. Lorem)" secondParents="(S/o Mrs. Ipsum &amp; Mr. Lorem)"/>
      <Events pageType="bride" />
      <Reach />
      <Timer />
      <Copyright />
    </motion.div>
  )
}

export default Ladkiwale;