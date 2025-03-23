"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

function MultipleItems() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container text-[#001733]">
      <Slider {...settings}>
        <div dir="rtl" className="bg-white rounded-3xl h-[300px] text-center">
          <div className="w-full aspect-video relative mb-6">
            <Image
              className="rounded-t-3xl object-cover"
              src="/project1.jpg"
              fill
              alt="طراحی سایت فروشگاهی"
            />
          </div>
          <Link href="/" className="text-xl">
            طراحی سایت فروشگاهی
          </Link>
        </div>
        <div dir="rtl" className="bg-white rounded-3xl h-[300px] text-center">
          <div className="w-full aspect-video relative mb-6">
            <Image
              className="rounded-t-3xl object-cover"
              src="/project2.jpg"
              fill
              alt="طراحی سایت فروشگاهی"
            />
          </div>
          <Link href="/" className="text-xl">
            طراحی سایت فروشگاهی
          </Link>
        </div>
        <div dir="rtl" className="bg-white rounded-3xl h-[300px] text-center">
          <div className="w-full aspect-video relative mb-6">
            <Image
              className="rounded-t-3xl object-cover"
              src="/project3.jpg"
              fill
              alt="طراحی سایت فروشگاهی"
            />
          </div>
          <Link href="/" className="text-xl">
            طراحی سایت فروشگاهی
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
