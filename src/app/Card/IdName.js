"use client";
import { useState, useEffect } from "react";

export default function IdName() {
  const [profileImg, setProfileImg] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const savedImg = localStorage.getItem("userProfileImg");
      if (savedImg) {
        setTimeout(() => setProfileImg(savedImg), 0);
      }
    }
  }, []);

  if (!isMounted)
    return (
      <div className="w-[400px] h-[50px] bg-white rounded-lg animate-pulse" />
    );

  return (
    <div className="w-[400px] h-[50px] bg-white flex items-center gap-3 p-2 rounded-lg shadow-sm border border-gray-100">
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
        <p className="text-[11px] text-gray-500 leading-none">
          1234567514528@e-mongolia.mn
        </p>
      </div>
    </div>
  );
}
