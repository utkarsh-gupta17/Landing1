// import images
import LogoImg from './assets/img/header/logo.webp';
// import LogoImg from '../src/assets/img/header/logo.svg';
import MainImg from '../src/assets/img/hero/image.svg';
import ServiceImg from '../src/assets/img/Services/hero.png';
import ContactImg from '../src/assets/img/Contact/hero.png';
import AboutImg from '../src/assets/img/About/hero.png';
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
import Webd from './assets/img/product/cards/webd.gif';
import Webd2 from './assets/img/product/cards/design.gif';
import DAA from './assets/img/product/cards/da.gif';
import SEO from './assets/img/product/cards/seo.gif';
import AI from './assets/img/product/cards/ai.gif';
import cybersecurity from './assets/img/product/cards/cybersecurity.gif';
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
  btnText: 'Get A Quote',
};

export const hero = {
  main :{
    title: 'Bringing Your Ideas To Life',
    subtitle: 'Are you ready to take your brand to the next level? Our creative agency is here to help. Let us bring your vision to life with our innovative ideas and exceptional results.',
    btnText: 'Request Project',
    side: '— SystroCode',
    image: MainImg,
  },
  services :{
    title: 'Unlocking Your  Imagination for creating your brand',
    subtitle: 'Are you ready to take your brand to the next level? Our creative company is here to help. Let us bring your vision to life with our innovative ideas and exceptional results.',
    btnText: 'Get A Free Quote',
    side: '— SystroCode',
    image: ServiceImg,    
  },
  contact :{
    title: 'Get In Touch',
    subtitle: 'Reach out to us for assistance, inquiries, or feedback—our team is here to help!',
    btnText: 'Get A Free Quote',
    side: '— SystroCode',
    image: ContactImg,
  },
  about :{
    title: 'About Systrocode',
    subtitle: 'Welcome to Systrocode, your gateway to digital excellence. Specializing in web development, digital marketing, data analysis, and Python automation, we empower businesses to thrive in the digital era. Our innovative solutions, tailored strategies, and expert team set the foundation for your online success.',
    btnText: 'Get A Free Quote',
    side: '— SystroCode',
    image: AboutImg,
  },
}

export const nav = [
  // { name: 'Features', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
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
      title: 'AI Automations',
      subtitle: 'Automate your processes with advanced AI solutions. Increase efficiency and reduce costs with intelligent automation tailored to your needs.',
      delay: 600,
    },
    {
      icon: cybersecurity,
      title: 'CyberSecurity',
      subtitle: 'Safeguarding your digital world with cutting-edge cybersecurity solutions.',
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
        "Working with Systrocode has been a game-changer for our business. Their expertise in web development and SEO has significantly improved our online presence, driving more traffic to our site than ever before. The team is professional, responsive, and truly understands our vision. We couldn't be happier with the results!",
      image: AvatarImg1,
      name: 'Sarah',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'We partnered with Systrocode for a complete website overhaul, and the outcome was outstanding. Their innovative design and seamless user experience have received rave reviews from our customers. Moreover, their continuous support and optimization efforts have ensured our site remains at the top of search engine results. A fantastic team to work with!',
      image: AvatarImg2,
      name: 'Jessi Singh',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
      "Systrocode's comprehensive digital marketing services have been instrumental in our company's growth. From SEO to social media management, their strategic approach has delivered impressive results across all fronts. Their professionalism and commitment to excellence make them a valued partner in our digital journey.",
      image: AvatarImg3,
      name: 'Ramesh Choudhary',
      position: 'CEO',
      borderColor: '#4756DF',
    },  
    {
      message:
        "Systrocode's social media marketing strategies have transformed our brand's online engagement. Their creative and data-driven approach has not only increased our followers but also boosted our sales. The level of dedication and personalized service they offer is unmatched. Highly recommended!",
      image: AvatarImg4,
      name: 'Rajesh Mishra',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    // {
    //   message:
    //     'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
    //   image: AvatarImg5,
    //   name: 'Terri Conroy',
    //   position: 'CEO',
    //   borderColor: '#BB7259',
    // },
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
    { name: 'About us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
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
    smallText: "We don't sell your email and spam",
  },
};

export const copyright = {
  link1: {
    name: 'Privacy Policy',
    href: '/policy',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright © 2024 SYSTROCODE. All Rights Reserved.',
  social: [
    { icon: FacebookIcon, href: 'https://facebook.com/people/Systrocode/61553616951262' },
    { icon: TwitterIcon, href: 'https://x.com/systrocode' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/company/systrocode/' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/systrocode/' },
  ],
};
