import React from 'react';
import './Cards.css';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// var swiper = new Swiper('.swiper', {
//   slidesPerView: 4,
//   spaceBetween: 50,
// });


// var swiper = new Swiper('.swiper', {
//   // Default parameters
//   slidesPerView: 4,
//   spaceBetween: 50,
//   // Responsive breakpoints
//   breakpoints: {
//       // when window width is <= 499px
//       499: {
//           slidesPerView: 1,
//           spaceBetweenSlides: 50
//       },
//       // when window width is <= 999px
//       999: {
//           slidesPerView: 2,
//           spaceBetweenSlides: 50
//       }
//   }
// });


const Cards = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
      <SwiperSlide className="cards1"><Card images="https://mspoweruser.com/wp-content/uploads/2019/02/Skype-Mobile-call-experience.jpg" description="Meet Now is now available in Windows 10 taskbar so you can meet with a simple click." names="Learn more " title="Meet Now, Right Now " /></SwiperSlide>
      <SwiperSlide className="cards1"><Card images="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/2014/12/Skye-Lync-video.png" description="Experience HD one to one or group video calling—now with call reactions." title="Video calling for 100 people " names="Explore video calls"/></SwiperSlide>
      <SwiperSlide className="cards1"><Card images="https://img.dtcn.com/image/digitaltrends/skype-50-people-1200x772.jpg" description="Call landlines and mobiles from anywhere in the world at great low rates using Skype." names="See our rates" title="Use Skype to call phones "/></SwiperSlide>
      <SwiperSlide className="cards1"><Card images="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2014/11/unnamed3-730x456.png" description="Read the words that are spoken during an audio or video call." names="How to set subtitles" title="Live subtitles "/></SwiperSlide>
      <SwiperSlide className="cards1"><Card images="https://mspoweruser.com/wp-content/uploads/2019/02/Skype-Mobile-call-experience.jpg" description="Meet Now is now available in Windows 10 taskbar so you can meet with a simple click." names="Learn more " title="Meet Now, Right Now " /></SwiperSlide>
      <SwiperSlide className="cards1"><Card images="https://www.microsoft.com/en-us/microsoft-365/blog/wp-content/uploads/2014/12/Skye-Lync-video.png" description="Experience HD one to one or group video calling—now with call reactions." title="Video calling for 100 people " names="Explore video calls"/></SwiperSlide>
      <SwiperSlide className="cards1"><Card images="https://img.dtcn.com/image/digitaltrends/skype-50-people-1200x772.jpg" description="Call landlines and mobiles from anywhere in the world at great low rates using Skype." names="See our rates" title="Use Skype to call phones "/></SwiperSlide>
      <SwiperSlide className="cards1"><Card images="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2014/11/unnamed3-730x456.png" description="Read the words that are spoken during an audio or video call." names="How to set subtitles" title="Live subtitles "/></SwiperSlide>
    </Swiper>
  );

};
export default Cards;