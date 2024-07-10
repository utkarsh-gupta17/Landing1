"use client";
import React from 'react'
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect,useRef } from 'react';

const ScrollSide = () => {
  
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{

    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    }, {
      translateX: "-300vw",
      ease :"none",
      duration : 1,
      scrollTrigger : {
        trigger : triggerRef.current,
        start : "top center",
        end : "2000 top",
        scrub : 1,
        pin : true,
        markers : true,
      }
  })

  return () => {
    pin.kill();
  }

  },[]);
  

  return (
    <section className='scroll-section-outer'>
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner h-screen flex relative flex-nowrap">
          <div className="scroll-section flex justify-center items-center">
            <h3 className='text-accent text-7xl'>Section 1</h3>
          </div>
          <div className="scroll-section flex justify-center items-center">
            <h3 className='text-accent text-7xl'>Section 2</h3>
          </div>
          <div className="scroll-section flex justify-center items-center">
            <h3 className='text-accent text-7xl'>Section 3</h3>
          </div>
          <div className="scroll-section flex justify-center items-center">
            <h3 className='text-accent text-7xl'>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollSide