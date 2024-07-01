import { overview } from '@/data';
import Image from 'next/image';
import React from 'react';


const Brands = () => {

  const { brands } = overview;
  return(
    <section className='py-9'>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6">
        {
          brands.map((item,index) => {
            const { image, delay } = item;
            return <div key={index}>
              <Image src={image} data-aos='fade-up' data-aos-delay={delay}></Image>
            </div>
          })
        }
      </div>
    </section>);
};

export default Brands;
