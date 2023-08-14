import React from 'react';
import { motion } from 'framer-motion';
import './Animation.scss';

const Animation = () => {
  return (
    <>
        <motion.div className='first' 
        initial={{x: '100%', width: '100%'}}
        animate={{x: '0%', width: '0%'}}
        exit={{x:['0%', '100%'], width: ['0%', '100%']}}
        transition={{duration: 0.8, ease: 'easeInOut'}}
        />
        <motion.div className='second' 
        initial={{x: '100%', width: '100%'}}
        animate={{x: '0%', width: '0%'}}
        exit={{x:['0%', '100%'], width: ['0%', '100%']}}
        transition={{delay: 0.2, duration: 0.8, ease: 'easeInOut'}}
        />
        <motion.div className='third' 
        initial={{x: '100%', width: '100%'}}
        animate={{x: '0%', width: '0%'}}
        exit={{x:['0%', '100%'], width: ['0%', '100%']}}
        transition={{delay: 0.4, duration: 0.8, ease: 'easeInOut'}}
        />
    </>
  )
}

export default Animation