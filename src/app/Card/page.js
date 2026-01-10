"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-coverflow";

import IdFlipCard from "./components/IdFlipCard";
import IdCardFront from "./IdCardFront";
import IdName from "./IdName";
import OrderFile from "./File";
import Footer from "../Footer";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#F4F9FF] flex flex-col items-center pt-10 font-inter overflow-x-hidden">
      <IdName />

      {/* Header хэсэг */}
      <div className="w-full max-w-[450px] flex justify-between items-center px-6 mt-8">
        <h1 className="text-[18px] font-bold text-[#1E1E1E]">Миний бичиг баримтууд</h1>
        <button className="bg-[#E6EBF4] text-[#5A6B8D] px-4 py-1.5 rounded-full text-sm font-medium">
          Шинэчлэх
        </button>
      </div>

      {/* 1. Carousel хэсэг - Энэ хэсэгт зөвхөн Front харагдана */}
      <div className="w-full py-10">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 150, // Картууд хоорондоо давхцах зай
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper !overflow-visible"
        >
          {[1, 2, 3].map((id) => (
            <SwiperSlide key={id} className="!w-fit" onClick={() => setIsModalOpen(true)}>
              <div className="cursor-pointer active:scale-95 transition-transform duration-200">
                <IdCardFront />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <OrderFile />
      <Footer />

      {/* 2. Modal Logic - Зураг дээрх шиг арын Blur-тэй */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
          
          {/* Арын бүдгэрүүлэгч (Overlay with Blur) */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-md transition-opacity" 
            onClick={() => setIsModalOpen(false)} 
          />

          {/* Modal-ийн цагаан цонх */}
          <div className="relative bg-white w-full max-w-[500px] rounded-t-[32px] p-6 shadow-2xl animate-in slide-in-from-bottom duration-500 ease-out z-[110]">
            
            {/* Дээд талын бариул */}
            <div className="w-12 h-1.5 bg-[#E0E0E0] rounded-full mx-auto mb-4" />
            
            <p className="text-center font-semibold text-[#1E1E1E] mb-6">Иргэний үнэмлэх</p>

            <div className="border-t border-gray-100 mb-6" />

            {/* Modal доторх эргэдэг карт */}
            <div className="flex justify-center">
              <IdFlipCard />
            </div>

            {/* Товчлуурнууд */}
            <div className="space-y-3 mt-8 pb-4">
              <button className="w-full bg-[#1A5CFF] text-white font-bold py-4 rounded-2xl active:scale-95 transition-all">
                Лавлагаа авах
              </button>
              <button className="w-full bg-[#F0F4FF] text-[#1A5CFF] font-bold py-4 rounded-2xl active:scale-95 transition-all">
                Дахин захиалах
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .swiper { overflow: visible !important; }
        .animate-in { animation: slideUp 0.4s ease-out forwards; }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}