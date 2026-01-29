"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import IdFlipCard from "./components/IdFlipCard";
import IdCardFront from "./IdCardFront";
import IdName from "./IdName";
import OrderFile from "./File";
import Footer from "../Footer";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = [1, 2, 3, 4, 5];

  return (
    <div className="relative min-h-screen bg-[#F4F9FF] flex flex-col items-center pt-10 font-inter overflow-x-hidden">
      <IdName />

      <div className="w-full max-w-[450px] flex justify-between items-center px-6 mt-8">
        <h1 className="text-[17px] font-bold text-[#1E1E1E]">
          Миний бичиг баримтууд
        </h1>
        <button className="bg-white text-[#1E1E1E] px-4 py-1.5 rounded-full text-[12px] font-bold shadow-sm active:scale-95 transition-all">
          Шинэчлэх
        </button>
      </div>

      <div className="w-full py-6 overflow-visible flex justify-center">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          loopedSlides={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper !overflow-visible w-full"
        >
          {cards.map((id) => (
            <SwiperSlide
              key={id}
              className="!w-[80%] max-w-[350px] flex justify-center items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="w-full flex justify-center">
                <div className="scale-[0.9] sm:scale-100 transition-transform duration-300 origin-center">
                  <IdCardFront />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <OrderFile />
      <div className="h-28" />
      <Footer />

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative bg-white w-full rounded-t-[32px] px-4 pt-4 pb-10 shadow-2xl z-[110] animate-slide-up flex flex-col items-center">
            {/* Handle */}
            <div className="w-12 h-1 bg-[#E0E0E0] rounded-full mb-4" />

            {/* Картны хэсэг - py-4-ийг py-0 болгож зайг хасав */}
            <div className="w-full flex justify-center py-0 overflow-hidden">
              <IdFlipCard />
            </div>

            {/* Товчлуурнууд */}
            <div className="w-full space-y-3 mt-6">
              <button className="w-full bg-[#1A5CFF] text-white font-bold py-4 rounded-[20px] text-[15px] active:scale-95 transition-all">
                Лавлагаа авах
              </button>
              <button className="w-full bg-[#F4F9FF] text-[#1A5CFF] font-bold py-4 rounded-[20px] text-[15px] active:scale-95 transition-all">
                Дахин захиалах
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        /* Swiper-ийг төвлөрүүлэх нэмэлт стиль */
        .swiper-wrapper {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
