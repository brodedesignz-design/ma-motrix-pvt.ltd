"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Montserrat } from "next/font/google";

import "swiper/css";
import "swiper/css/pagination";

/* LOGO / BRAND FONT */
const brandFont = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function Home() {
  return (
    <div className={`flex flex-col ${brandFont.className}`}>

      {/* ================= HERO SWIPER ================= */}
      <section className="relative h-[85vh] md:h-[95vh] bg-black overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop
          className="h-full w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src="/hero/hero1.jpg"
                alt="Industrial Precision"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative h-full w-full">
              <Image
                src="/hero/hose.png"
                alt="Hydraulic Hose"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* HERO CONTENT */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-wide leading-tight mb-6">
                THE POWER OF <br />
                <span className="text-[#00ff88]">PRECISION</span>
              </h1>

              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl font-medium">
                Leading manufacturer of automotive spare parts, hydraulic hose pipes,
                and industrial fittings. Engineering excellence for a connected world.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="px-8 py-3 border border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition rounded-sm font-semibold tracking-wide"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border border-[#c0a060] text-[#c0a060] hover:bg-[#c0a060] hover:text-black transition rounded-sm font-semibold tracking-wide"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT PORTFOLIO ================= */}
      <section className="py-20 bg-zinc-100 text-black">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-wide mb-2">
                PRODUCT PORTFOLIO
              </h2>
              <div className="h-1 w-20 bg-[#00ff88]" />
            </div>

            <Link
              href="/products"
              className="text-sm font-bold flex items-center gap-2 hover:text-[#00ff88]"
            >
              VIEW ALL <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/hydraulic-hose-pipe.jpg", title: "Hydraulic" },
              { img: "/ss-bellow-hose.jpg", title: "SS Bellow Hoses" },
              { img: "/industrial-hose-fitting-gold.jpg", title: "Industrial Fittings" },
              { img: "/industrial-fittings-dark.jpg", title: "High Pressure Fittings" },
            ].map((p, i) => (
              <div
                key={i}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <div className="relative aspect-square">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold tracking-wide">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
