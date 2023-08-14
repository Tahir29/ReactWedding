import React from 'react';
import Meta from '../components/Meta';
import SideMenu from '../components/SideMenu';
import Hero from '../components/Hero/Hero';
import Invitation from '../components/Invitation/Invitation';
import Events from '../components/Events/Events';
import Family from '../components/Family/Family';
import Reach from '../components/Reach/Reach';
import Timer from '../components/Timer/Timer';
import Copyright from '../components/Copyright/Copyright';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Animation from '../components/Animation/Animation';
import { motion } from 'framer-motion';

const Ladkewale = () => {

  return (
    <motion.div key='ladkewale'>
      <Meta title="Ladkewale" />
      <ScrollToTopButton />
      <Animation />
      <SideMenu currentPage="groom" />
      <Hero firstName="Lorem" secondName="Ipsum" />
      <Invitation firstName="Lorem" secondName="Ipsum" firstParents="(S/o Mrs. ipsum &amp; Mr. lorem)" secondParents="(D/o Mrs. ipsum &amp; Mr. lorem)"/>
      <Events pageType="groom" />
      <Family />
      <Reach />
      <Timer />
      <Copyright />
    </motion.div>
  )
}

export default Ladkewale;