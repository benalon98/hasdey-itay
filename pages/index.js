import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Instagram from '../components/Instagram'
import Interview from '../components/Interview'
import { SliderData } from '../components/SliderData';
import Skills from '../components/Skills';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Home() {
  const [donations,setDontations] = useState([])
  async function fetchDonations() {
    try {
      const response = await axios.get('https://matara.pro/nedarimplus/Reports/Manage3.aspx?Action=GetHistoryJson&MosadId=7002417&ApiPassword=iy321&LastId=28337101&MaxId=16');
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
      setDontations(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // Initial fetch when component mounts
    fetchDonations();

    // Schedule subsequent fetches every hour
    const interval = setInterval(fetchDonations, 60 * 60 * 1000); // 1 hour in milliseconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
      <Head>
        <title>חסדי איתי</title>
        <meta
      name="description"
      content="גמ״ח חסדי איתי, ארוחות חמות מידי יום לנזקקים וקשי יכולת"
    />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"  />
    <link
      href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rozha+One&display=swap"
      rel="stylesheet"
    />
        <link rel='icon' href='/favicon.ico' />
        
      </Head>
      <Hero heading='חסדי איתי' message='ארוחות חמות מידי יום לנזקקים וקשי יכולת' />
      <Slider slides={SliderData} />
      <Instagram />
      <Skills donations={donations}/>
      <Testimonial/>
      <Interview/>
      <Footer/>
      <Copyright/>
    </div>
  );
}
