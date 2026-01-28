"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function IdCardFront() {
  const sp = useSearchParams();
  const [profileImg, setProfileImg] = useState(null);
  const x = () => {
    console.log("hi");
  };

  useEffect(() => {
    const img = localStorage.getItem("userProfileImg");
    if (img) setProfileImg(img);
  }, []);

  const data = {
    ovog: (sp.get("ovog") || "БОРЖИГОН").toUpperCase(),
    surname: (sp.get("surname") || "ЛХАГВАСҮРЭН").toUpperCase(),
    givenName: (sp.get("givenName") || "УЯНГА").toUpperCase(),
    sex: (sp.get("sex") || "ЭМЭГТЭЙ").toUpperCase(),
    dob: sp.get("dob") || "2004/11/29",
    Number: sp.get("Number") || "392346426872",
  };

  const labelBase = "text-[#025C8C] text-[10px] font-semibold leading-[11px]";
  const englishLabel = "text-[#025C8C] text-[9.5px] italic ml-[2px]";
  const valueText = "text-[#1E1E1E] text-[10.8px] uppercase";

  return (
    <div
      className="relative w-[450px] h-[282px] rounded-[18px] shadow-lg cursor-pointer"
      style={{
        backgroundImage: "url('/images/IdCard.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <div className="absolute top-[22px] left-[132px]">
        <p className="text-[#025C8C] text-[12.5px] font-extrabold">
          МОНГОЛ УЛСЫН ИРГЭНИЙ ҮНЭМЛЭХ
        </p>
        <p className="text-[#025C8C] text-[10.5px] font-semibold mt-[3px]">
          CITIZEN IDENTITY CARD MONGOLIA
        </p>
      </div>

      {/* Photo */}
      <div className="absolute top-[75px] left-[26px] w-[105px] h-[132px] bg-white border border-[#D1D1D1] overflow-hidden">
        {profileImg ? (
          <img
            src={profileImg || "/default-avatar.png"} // хоосон байхаас сэргийлнэ
            alt="Иргэний зураг"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#E6E6E6]" />
        )}
      </div>

      {/* Info */}
      <div className="absolute top-[68px] left-[146px] w-[270px] space-y-[4px]">
        <div>
          <p className={labelBase}>
            Овог <span className={englishLabel}>Family name</span>
          </p>
          <p className={valueText}>{data.ovog}</p>
        </div>

        <div>
          <p className={labelBase}>
            Эцэг/ эх /-ийн нэр <span className={englishLabel}>Surname</span>
          </p>
          <p className={valueText}>{data.surname}</p>
        </div>

        <div>
          <p className={labelBase}>
            Нэр <span className={englishLabel}>Given name</span>
          </p>
          <p className={valueText}>{data.givenName}</p>
        </div>

        <div>
          <p className={labelBase}>
            Хүйс <span className={englishLabel}>Sex</span>
          </p>
          <p className={valueText}>{data.sex}</p>
        </div>

        <div>
          <p className={labelBase}>
            Төрсөн он, сар, өдөр{" "}
            <span className={englishLabel}>Date of birth</span>
          </p>
          <p className={valueText}>{data.dob}</p>
        </div>

        {/* Civil ID */}
        <div className="mt-[-4px]">
          <p className={labelBase}>
            Иргэний бүртгэлийн дугаар{" "}
            <span className={englishLabel}>Civil identification</span>
          </p>
          <p className="text-[13px] font-normal text-[#000000] leading-tight">
            {data.Number}
          </p>
        </div>
      </div>
    </div>
  );
}
