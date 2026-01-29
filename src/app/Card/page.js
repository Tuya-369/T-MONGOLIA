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

      <div className="w-full py-6 overflow-visible flex flex-col items-center">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
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
              className="!w-[85%] max-w-[360px] flex justify-center items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="w-full flex justify-center">
                <div className="w-full transition-transform duration-300 transform active:scale-95">
                  <IdCardFront />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Зөвхөн энэ хэсгийг нэмлээ */}
        <div className="mt-8">
          <button className="bg-white text-[#1A5CFF] text-[14px] font-bold px-10 py-3 rounded-2xl shadow-sm border border-gray-50 active:scale-95 transition-all">
            Бүх бичиг баримтыг харах
          </button>
        </div>
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

          <div className="relative bg-white w-full rounded-t-[32px] px-2 pt-4 pb-10 shadow-2xl z-[110] animate-slide-up flex flex-col items-center">
            <div className="w-12 h-1 bg-[#E0E0E0] rounded-full mb-6" />

            <div className="w-full flex justify-center py-0 px-2 overflow-visible">
              <IdFlipCard />
            </div>

            <div className="w-full px-5 space-y-3 mt-8">
              <button className="w-full bg-[#1A5CFF] text-white font-bold py-4 rounded-[20px] text-[15px] active:scale-95 transition-all shadow-lg shadow-blue-200">
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
          animation: slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .swiper-wrapper {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
