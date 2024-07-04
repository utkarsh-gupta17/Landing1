// import images
import LogoImg from './assets/img/header/logo.webp';
// import LogoImg from '../src/assets/img/header/logo.svg';
import OverviewProductImg from './assets/img/overview/product.svg';
import FacebookImg from './assets/img/overview/brands/facebook.svg';
import GoogleImg from './assets/img/overview/brands/google.svg';
import CocaColaImg from './assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from './assets/img/overview/brands/linkedin.svg';
import SamsungImg from './assets/img/overview/brands/samsung.svg';
import Feature1Img from './assets/img/features/feature1-img.svg';
import Feature2Img from './assets/img/features/feature2-img.svg';
import Feature3Img from './assets/img/features/feature3-img.svg';
import ArrowRightImg from './assets/img/features/arrow-right.svg';
import CardIconImg1 from './assets/img/product/cards/icon1.svg';
import CardIconImg2 from './assets/img/product/cards/icon2.svg';
import CardIconImg3 from './assets/img/product/cards/icon3.svg';
import Webd from './assets/img/product/cards/webd.webp';
import Webd2 from './assets/img/product/cards/webd2.webp';
import DAA from './assets/img/product/cards/dataAnalysis.webp';
import SEO from './assets/img/product/cards/SEO.webp';
import AI from './assets/img/product/cards/ai.webp';
import PricingIcon1 from './assets/img/pricing/icon1.svg';
import PricingIcon2 from './assets/img/pricing/icon2.svg';
import PricingIcon3 from './assets/img/pricing/icon3.svg';
import AvatarImg1 from './assets/img/testimonial/avatar1.png';
import AvatarImg2 from './assets/img/testimonial/avatar2.png';
import AvatarImg3 from './assets/img/testimonial/avatar3.png';
import AvatarImg4 from './assets/img/testimonial/avatar4.png';
import AvatarImg5 from './assets/img/testimonial/avatar5.png';
import CtaImg1 from './assets/img/cta/image1.svg';
import CtaImg2 from './assets/img/cta/image2.svg';
import FacebookIcon from './assets/img/copyright/facebook8.svg';
import TwitterIcon from './assets/img/copyright/twitterx8.svg';
import LinkedinIcon from './assets/img/copyright/linkedin8.svg';
import InstagramIcon from './assets/img/copyright/instagram8.svg';


export const header = {
  logo: LogoImg,
  btnText: 'Request a demo',
};

export const nav = [
  // { name: 'Features', href: '/' },
  { name: 'Services', href: '/' },
  { name: 'About us', href: '/' },
  { name: 'Contact Us', href: '/' },
];


export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Always online',
    title: 'Web Design & Development Process',
    subtitle:
      'For clients seeking dynamic, high performance websites, our MERN stack development services offers the cutting edge in web technology. Combining MongoDB, Next.js, React, and Node.js, we deliver responsive, fast-loading, and scalable web applications perfect for complex, data-driven websites and applications.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Level Up Online Presence',
    title: 'SEO/ SMM Marketing',
    subtitle:
      'For clients aiming to elevate their digital presence, our comprehensive SEO and SMM services provide the ultimate edge in online visibility and engagement. Leveraging advanced strategies and the latest tools, we enhance your search rankings, amplify your social media presence, and drive meaningful interactions with your target audience.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Power of Data',
    title: 'Business/ Data Analysis',
    subtitle:
      'Data is at the heart of informed decision making. Our data and business analysis services transform raw data into strategic insights. Utilizing the latest in analytics technology, we provide comprehensive reports, predictive analytics, and actionable recommendations. Whether optimizing operations, exploring new market opportunities, or understanding customerbehavior, our analysis informs and empowers businesses to act with confidence.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'Our Services',
  subtitle:
    'Discover the Range of Services We Offer',
  cards: [
    {
      icon: Webd,
      // icon: CardIconImg1,
      title: 'Web Development',
      subtitle: 'Transforming your ideas into interactive and responsive web applications. Let us build your digital presence with cutting edge technology.',
      delay: 200,
    },
    {
      icon: Webd2,
      // icon: CardIconImg2,
      title: 'Web Design',
      subtitle: 'Crafting visually stunning and user-friendly designs that captivate and engage your audience. Your brand deserves the best.',
      delay: 400,
    },
    {
      icon: DAA,
      // icon: CardIconImg3,
      title: 'Business /Data analysis',
      subtitle: 'Unlock the power of your data with our expert analysis. Make informed decisions and drive business growth through insightful analytics.',
      delay: 600,
    },
    {
      icon: SEO,
      // icon: CardIconImg3,
      title: 'SEO / SMM',
      subtitle: 'Elevate your online visibility and connect with your audience. Our SEO and SMM strategies ensure you stand out in a crowded digital landscape.',
      delay: 600,
    },
    {
      icon: AI,
      // icon: CardIconImg3,
      title: 'AI Automations',
      subtitle: 'Automate your processes with advanced AI solutions. Increase efficiency and reduce costs with intelligent automation tailored to your needs.',
      delay: 600,
    },
    {
      icon: CardIconImg3,
      title: 'Pure Javascript',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
  ],
};

export const pricing = {
  title: 'Choose your flexible plan.',
  cards: [
    {
      icon: PricingIcon1,
      title: 'Starter Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$9.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 300,
    },
    {
      icon: PricingIcon2,
      title: 'Silver Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$19.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 600,
    },
    {
      icon: PricingIcon3,
      title: 'Diamond Plan',
      services: [
        { name: 'Store unlimited data' },
        { name: 'Export to pdf, xls, csv' },
        { name: 'Cloud server support' },
      ],
      price: '$29.99',
      userAmount: 'up to 3 user + 1.99 per user',
      btnText: 'Get this',
      delay: 900,
    },
  ],
};

export const testimonials = {
  title: 'We have millions of best wishers',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg1,
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg2,
      name: 'Shirley Hand',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg3,
      name: 'Dr. Olivia Hansen',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '20M+ downloaded from 32 different countries',
  subtitle: 'Try demo for 7 days with full features.',
  btnText: 'Try free demo',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Services', href: '/' },
    { name: 'Contact Us', href: '/' },
    // { name: 'Features', href: '/' },
    // { name: 'Blog', href: '/' },
  ],
  categories: [
    { name: 'Branding', href: '/' },
    { name: 'Web Design', href: '/' },
    { name: 'Marketing', href: '/' },
    { name: 'Copywriting', href: '/' },
    { name: 'Videography', href: '/' },
    { name: 'Animation', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright © 2024 SYSTROCODE. All Rights Reserved.',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
    { icon: InstagramIcon, href: '/' },
  ],
};
