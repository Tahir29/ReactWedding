import React, { useState } from 'react';
import Button from '../components/Button/Button';
import Animation from '../components/Animation/Animation';
import { motion } from 'framer-motion';
import '../App.scss';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div key='home'>
      <Animation />
      <section className='sectionHome'>
        <motion.div
            initial={false}
            animate={
            isLoaded && isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1.2, delay: 2 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsInView(true)} className='sectionHome--flower'
        >
          <img src="/images/flower.png" alt="Flower" onLoad={() => setIsLoaded(true)} />
        </motion.div>
        
        <div className='sectionHome__wrapper'>
            <motion.h1 className='main--title' initial={{opacity:0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 1}}>Lorem <span className='and'>&&nbsp;&nbsp;</span> Ipsum</motion.h1>
            <motion.div className='sectionHome__button' initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 1, delay: 1}}>
                <Button to="/Ladkewale" title="Ladkewale">Ladkewale</Button>
                <Button to="/Ladkiwale" title="Ladkiwale">Ladkiwale</Button>
            </motion.div>
        </div>
      </section>
    </motion.div>
    
  )
}

export default Home
