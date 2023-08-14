import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { groomFamily } from '../../utils/FamilyData';
import { motion } from 'framer-motion';
import './Family.scss';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const Card = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <>
        {groomFamily.map((familyitem, index) => {
            return (
                <div className='sectionFamily__people' key={index}>
                    <div className='sectionFamily__people--image'>
                        <motion.div
                            initial={false}
                            animate={
                            isLoaded && isInView
                                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                            }
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: true }}
                            onViewportEnter={() => setIsInView(true)}
                        >
                            <LazyLoad threshold={0.95}>
                                <picture>
                                    <source srcset={require(`../../assets${familyitem.webp}`)} type="image/webp" />
                                    <source srcset={require(`../../assets${familyitem.img}`)} type="image/jpeg" />
                                    <img src={require(`../../assets${familyitem.img}`).default} alt={familyitem.name} onLoad={() => setIsLoaded(true)} />
                                </picture>
                                {/* <img src={familyitem.img} alt={familyitem.name} onLoad={() => setIsLoaded(true)} /> */}
                            </LazyLoad>
                        </motion.div>                        
                    </div>
                    <div className='sectionFamily__people--name'>
                        <p>{familyitem.name} <span>{familyitem.relation}</span></p>
                    </div>
                </div>
            );
        })}        
    </>
  )
}

export default Card