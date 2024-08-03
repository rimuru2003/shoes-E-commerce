'use client';

import React from 'react';
import { HashtagIcon, HeartIcon } from '@heroicons/react/24/solid';
import { ClockIcon } from '@heroicons/react/24/outline';
import Title from './utils/Title';
import { truncate } from 'lodash';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Stories = ({ story: { title, news } }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        },
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2 ,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="nike-container mb-11">
      <Title title={title} />
      <div className="mt-11">
        <Slider {...settings} className="custom-slider">
          {news.map((val, i) => (
            <div key={i} className="mb-3 slider-item"> {/* Add the custom class */}
              <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                <div className="flex items-center justify-center">
                  <img src={val.img} alt={`img/story/${i}`} className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg" />
                </div>
                <div className="flex items-center justify-between w-full px-4">
                  <div className="flex items-center gap-0.5">
                    <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                    <span className="text-xs font-bold">{val.like}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <ClockIcon className="icon-style w-4 h-4 text-black" />
                    <span className="text-xs font-bold">{val.time}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <HashtagIcon className="icon-style text-blue-600" />
                    <span className="text-xs font-bold text-blue-600">{val.by}</span>
                  </div>
                </div>
                <div className="grid items-center justify-items-start px-4">
                  <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                  <p className="text-sm text-justify lg:text-xs">{truncate(val.text, { length: 175 })}</p>
                </div>
                <div className="flex items-center justify-center px-4 w-full">
                  <a href={val.url} target="_blank" role="button" className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme">
                    {val.btn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Stories;
