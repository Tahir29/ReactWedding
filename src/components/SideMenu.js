import React, { useState } from 'react';
import { TfiAlignJustify, TfiHome, TfiBookmarkAlt, TfiWrite, TfiUser, TfiPin } from 'react-icons/tfi'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import './Common.scss';

const menuItems = [
  {
    id: 1,
    name: 'Invitation',
    to: 'sectionInvitation',
    icon: <TfiBookmarkAlt />,
    pageType: ['groom', 'bride']
  },
  {
    id: 2,
    name: 'Ceremonies and Functions',
    to: 'sectionEvents',
    icon: <TfiWrite />,
    pageType: ['groom', 'bride']
  }, 
  {
    id: 3,
    name: 'The Family',
    to: 'sectionFamily',
    icon: <TfiUser />,
    pageType: ['groom']
  }, 
  {
    id: 4,
    name: 'How to Reach',
    to: 'sectionReach',
    icon: <TfiPin />,
    pageType: ['groom', 'bride']
  }
]

const SideMenu = ({currentPage}) => {

  const filteredData = menuItems.filter(item => item.pageType.includes(currentPage));

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeHandler = () => {
    setIsOpen(false)
  }

  // const openHandler = () => {
  //     setIsOpen(true)
  // }

  // const closeHandler = () => {
  //     setIsOpen (false)
  // }

  // const filteredMenuItems = currentPage === 'ladkewale' ? menuItems : menuItems.slice(0,3);

  return (
    <div className='sideMenu'>
      <div className='sideMenu__icon' onClick={toggleMenu}>
        <TfiAlignJustify />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div className='sideMenu__data' initial={{ opacity: 0, x: -340 }}
          animate={{ opacity: 1, x: '0' }}
          exit={{ opacity: 0, x: -340 }}
          transition={{ duration: 0.3 }}>
            <div className='sideMenu__list'>
              <Link to='/' title='Home' className='sideMenu__list--item' onClick={closeHandler}>
                <span><TfiHome /></span> Home
              </Link>

              {filteredData.map((menuItem, index) => {
                return(
                  <ScrollLink className='sideMenu__list--item' key={index} to={menuItem.to} spy={true} smooth={true} offset={0} duration={500} onClick={closeHandler}>
                    <span>{menuItem.icon}</span> {menuItem.name}
                  </ScrollLink>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* {isOpen && (
        <div className='sideMenu__data'>Test <FiX onClick={closeHandler} /> </div>
      )} */}
      {/* <Outlet /> */}
    </div>
  )
}

export default SideMenu
