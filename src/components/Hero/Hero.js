import React from 'react';
import Slider from "react-slick";
import { heroImages } from '../../utils/HeroData';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as ScrollLink } from 'react-scroll';
import './Hero.scss';

const Hero = (props) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        lazyLoad: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
    <section className='heroSlider'>
        <Slider {...settings}>
            {heroImages.map((item, index) => {
                return(
                    <div>
                        <picture key={index}>
                            <source srcset={require(`../../assets${item.webp}`)} type="image/webp" />
                            <source srcset={require(`../../assets${item.src}`)} type="image/jpeg" />
                            <img src={require(`../../assets${item.src}`).default} alt={item.alt} className='heroSlider--image' width='100%' height='100vh' />
                        </picture>
                        {/* <img key={index} src={item.src} alt={item.alt} className='heroSlider--image' 
                            width='100%' 
                            height='100vh'/> */}
                    </div>
                );
            })}
        </Slider>

        <div className='heroSlider__content'>
            <h1 className='main--title'>{props.firstName} <span className='and'>&&nbsp;&nbsp;</span> {props.secondName}</h1>
            <p className='gettingMarried'>Are Getting Married</p>
            <hr width='6%' className='center-block' />
            <p className='weddingDate'>
                <span className='date'>2&nbsp;<sup>nd</sup> &amp; 3&nbsp;<sup>rd</sup></span>
                November at Wood Castle Spa &amp; Resort, Jim Corbett
            </p>
            <div className='heroSlider__content--buttonWrapper'>
                <ScrollLink className='-link' title="Celebrate With Us" to="sectionInvitation" spy={true} smooth={true} offset={0} duration={500}>Celebrate With Us</ScrollLink>
            </div>
        </div>
    </section>
    );
}

export default Hero
