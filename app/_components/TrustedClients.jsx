"use client";

import Image from "next/image";
import Slider from "react-slick";

function TrustedClients() {
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
        <div className="p-5 bg-white text-[#001733] flex-1 h-fit rounded-4xl text-center">
          <Image
            width={100}
            height={100}
            className="rounded-full mx-auto mt-5"
            src="/avatar.jpg"
            alt="امیر موسوی"
          />
          <span className="block mt-3">امیر موسوی</span>
          <span className="block font-light mt-2 text-[15px]">نوستالشیو</span>
          <p className="font-light text-sm mt-5 leading-[28px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <svg
            className="size-6 fill-[#001733] mx-auto mt-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216m256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216"></path>
          </svg>
        </div>
        <div className="p-5 bg-white text-[#001733] flex-1 h-fit rounded-4xl text-center">
          <Image
            width={100}
            height={100}
            className="rounded-full mx-auto mt-5"
            src="/avatar.jpg"
            alt="امیر موسوی"
          />
          <span className="block mt-3">امیر موسوی</span>
          <span className="block font-light mt-2 text-[15px]">نوستالشیو</span>
          <p className="font-light text-sm mt-5 leading-[28px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <svg
            className="size-6 fill-[#001733] mx-auto mt-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216m256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216"></path>
          </svg>
        </div>
        <div className="p-5 bg-white text-[#001733] flex-1 h-fit rounded-4xl text-center">
          <Image
            width={100}
            height={100}
            className="rounded-full mx-auto mt-5"
            src="/avatar.jpg"
            alt="امیر موسوی"
          />
          <span className="block mt-3">امیر موسوی</span>
          <span className="block font-light mt-2 text-[15px]">نوستالشیو</span>
          <p className="font-light text-sm mt-5 leading-[28px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <svg
            className="size-6 fill-[#001733] mx-auto mt-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216m256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216"></path>
          </svg>
        </div>
        <div className="p-5 bg-white text-[#001733] flex-1 h-fit rounded-4xl text-center">
          <Image
            width={100}
            height={100}
            className="rounded-full mx-auto mt-5"
            src="/avatar.jpg"
            alt="امیر موسوی"
          />
          <span className="block mt-3">امیر موسوی</span>
          <span className="block font-light mt-2 text-[15px]">نوستالشیو</span>
          <p className="font-light text-sm mt-5 leading-[28px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <svg
            className="size-6 fill-[#001733] mx-auto mt-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216m256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216"></path>
          </svg>
        </div>
        <div className="p-5 bg-white text-[#001733] flex-1 h-fit rounded-4xl text-center">
          <Image
            width={100}
            height={100}
            className="rounded-full mx-auto mt-5"
            src="/avatar.jpg"
            alt="امیر موسوی"
          />
          <span className="block mt-3">امیر موسوی</span>
          <span className="block font-light mt-2 text-[15px]">نوستالشیو</span>
          <p className="font-light text-sm mt-5 leading-[28px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <svg
            className="size-6 fill-[#001733] mx-auto mt-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216m256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216"></path>
          </svg>
        </div>
        <div className="p-5 bg-white text-[#001733] flex-1 h-fit rounded-4xl text-center">
          <Image
            width={100}
            height={100}
            className="rounded-full mx-auto mt-5"
            src="/avatar.jpg"
            alt="امیر موسوی"
          />
          <span className="block mt-3">امیر موسوی</span>
          <span className="block font-light mt-2 text-[15px]">نوستالشیو</span>
          <p className="font-light text-sm mt-5 leading-[28px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </p>
          <svg
            className="size-6 fill-[#001733] mx-auto mt-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216m256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216"></path>
          </svg>
        </div>
      </Slider>
    </div>
  );
}

export default TrustedClients;
