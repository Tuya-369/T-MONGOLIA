"use client";
import { useEffect, useState } from "react";

export default function IdName() {
  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    const savedImg = localStorage.getItem("userProfileImg");
    if (savedImg) {
      setProfileImg(savedImg);
    }
  }, []);

  return (
    <div className="w-[300px] h-[50px] bg-white flex items-center gap-3 p-2">
      <img
        src={profileImg || "/profile.png"}
        alt="profile"
        className="w-[40px] h-[40px] rounded-full object-cover"
      />

      <div>
        <p className="text-blue-500 text-sm font-bold">Г.Гантуяа</p>
        <p className="text-xs">1234567514528@e-mongolia.mn</p>
      </div>
    </div>
  );
}
