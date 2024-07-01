import { product } from '@/data';
import React,{ useState }  from 'react';
import ArrowImg from '../assets/img/product/cards/arrow.svg';
import Image from 'next/image';

const Cards = () => {
  const [index, setIndex] = useState(1);
  const { cards } = product;
  return( 
    <div className='flex flex-col gap-y-[30px] lg:flex-row lg:gap-x-[30px]'>
      {cards.map((card,cardIndex)=>{
        const { icon, title, subtitle, delay } = card;

        return( 
        <div key={cardIndex} data-aos='zoom-out' data-aos-offset='300' data-aos-delay='delay'>
          <div onClick={()=>setIndex(cardIndex)} className={`${index===cardIndex && 'bg-white shadow-2xl'} w-[350px] h-[350px] flex flex-col items-center justify-center mx-auto p-[65px] text-center rounded-[12px] cursor-pointer transition-all hover:shadow-xl`}>
            <div className="mb-6">
              <Image src={icon}></Image>
            </div>
            <div className='mb-3 text-[30px] font-medium'>{ title }</div>
            <p className='mb-6 text-light'>{ subtitle }</p>
            {index===cardIndex && <Image src={ArrowImg}/>}
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default Cards;
