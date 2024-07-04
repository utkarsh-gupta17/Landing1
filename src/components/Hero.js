import {HiOutlineChevronDown} from 'react-icons/hi';
import Image from 'next/image';
import HeroImg from '../assets/img/hero/image.svg';

const Hero = () => {

  return(
    <section className='min-h-[900px] py-4'>
      <div className="container mx-auto min-h-[900px] flex justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          {/* text */}
          <div className="flex-1">
            <h1 className="title mb-2 lg:mb-5" data-aos='fade-down' data-aos-delay='500'>Bringing Your Ideas To Life</h1>
            <p className="lead mb-5 lg:mb-10" data-aos='fade-down' data-aos-delay='600'>Are you ready to take your brand to the next level? Our creative agency is here to help. Let us bring your vision to life with our innovative ideas and exceptional results.</p>
            <div className='flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6' data-aos='fade-down' data-aos-delay='700'>
              <button className='btn btn-md lg:btn-lg btn-accent flex justify-center items-center lg:gap-x-4'>
              Request Project 
                <HiOutlineChevronDown/>
              </button>
              <span className='text-light lg:lead lg:mb-0'>— SystroCode</span>
            </div>
          </div>
          {/* image */}
          <div className='flex-1' data-aos='fade-up' data-aos-delay='800'>
            <Image src={HeroImg} className='flex-1'></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
