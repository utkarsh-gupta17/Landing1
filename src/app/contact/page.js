"use client";
// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';
// import components
import Header from '@/components/Header.js';
// import Header from '../components/Header.js';
import Hero from '@/components/Hero.js';
import Overview from '@/components/Overview.js';
import Brands from '@/components/Brands.js';
import Feature1 from '@/components/Feature1.js';
import Feature2 from '@/components/Feature2.js';
import Feature3 from '@/components/Feature3.js';
import Product from '@/components/Product.js';
import Pricing from '@/components/Pricing.js';
import Testimonials from '@/components/Testimonials.js';
import Cta from '@/components/Cta.js';
import Footer from '@/components/Footer.js';
import { useEffect } from "react";
import { hero } from '@/data';
import Form from '@/components/Form';
import { NavbarMT } from '@/components/NavbarMT';
// import Card2 from '@/components/Card2.js';

export default function Home() {

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    })
  }, []) 
  

  return (
    <div className='overflow-hidden w-full'>
      {/* <Header /> */}
      <NavbarMT/>
      <Hero data={hero.contact}/>
      <Form/>
      {/* <Overview /> */}
      <Pricing />
      <Testimonials />
      <Cta />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
}
