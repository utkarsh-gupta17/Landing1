import { features } from '@/data';
import Image from 'next/image';
import React from 'react';


const Feature1 = () => {
  const { feature1 } = features;
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1;
  return( 
    <section className='section'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-[30px]'>
          <div className="flex-1" data-aos='fade-right' data-aos-offset='400'>
            <div className='pretitle'>{ pretitle }</div>
            <h2 className='title'>{ title }</h2>
            <p className='lead'>{ subtitle }</p>
            <button className='btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all'>
              {btnLink} <Image src={btnIcon}/>
            </button>
          </div>
          <div className="flex-1" data-aos='fade-left' data-aos-offset='300'>
            <Image src={image}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
