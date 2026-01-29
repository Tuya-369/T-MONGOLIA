"use client";
import { ArrowBigLeft } from "lucide";
import { useState, useEffect } from "react";

export default function IdName() {
  const [profileImg, setProfileImg] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setMounted(true);
      const savedImg = localStorage.getItem("userProfileImg");
      if (savedImg) setProfileImg(savedImg);
    });
  }, []);

  if (!mounted) {
    return <div className="w-[400px] h-[50px] opacity-0" />;
  }

  return (
    <div className="w-[350px] h-[70px] rounded-lg border border-gray-100 bg-white flex items-center gap-3 p-2 rounded-lg shadow-sm">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
        {profileImg ? (
          <img
            src={profileImg}
            alt="Профайл"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
            ГГ
          </div>
        )}
      </div>
      <div className="flex-1">
        <p className="text-blue-600 text-sm font-bold leading-none mb-1">
          Г.Гантуяа
        </p>
        <p className="text-[11px] text-gray-900 leading-none">
          1234567514528@e-mongolia.mn
        </p>
      </div>
      <div className="w-8 h-8 rounded-full bg-[#F4F9FF] flex items-center justify-center flex-shrink-0 group-active:scale-90 transition-transform">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1A5CFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </div>
  );
}
