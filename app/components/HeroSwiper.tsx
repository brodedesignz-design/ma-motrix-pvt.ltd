"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

export default function HeroSwiper() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop
      className="w-full h-[500px] md:h-[650px]"
    >
      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src="/hero/hero1.png"
            alt="Industrial Parts"
            fill
            priority
            className="object-cover"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative w-full h-full">
          <Image
            src="/hero/hose.png"
            alt="Hydraulic Hose"
            fill
            className="object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
