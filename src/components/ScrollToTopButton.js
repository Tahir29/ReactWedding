import React, {useState, useEffect} from 'react';
import { TfiAngleDoubleUp } from 'react-icons/tfi'
import './Common.scss';

const ScrollToTopButton = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if(window.pageYOffset > 100) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <button title='Scroll To Top' className={`scrollTop ${isVisible ? 'is-visible' : ''}`} onClick={handleScrollToTop}><TfiAngleDoubleUp /></button>
  )
}

export default ScrollToTopButton
