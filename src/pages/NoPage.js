import React from 'react';
import Button from '../components/Button/Button';
import Meta from '../components/Meta';
import Animation from '../components/Animation/Animation';
import { motion } from 'framer-motion';
import '../App.scss';

const NoPage = () => {
  return (
    <motion.div key='nopage'>
      <Meta title="Page Not Found" />
      <Animation />
      <section className='sectionNoPage'>
        <div className='sectionNoPage__wrapper'>
          <h1 className='main--title'>Page Not Found</h1>

          <div className='sectionNoPage__button'>
            <Button to='/' title='Home Page'>Redirect to Home Page</Button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default NoPage;