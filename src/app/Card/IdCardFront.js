"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function IdCardContent() {
  const sp = useSearchParams();
  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    const savedImg = localStorage.getItem("userProfileImg");
    if (savedImg) {
      setTimeout(() => {
        setProfileImg(savedImg);
      }, 0);
    }
  }, []);

  const toTitleCase = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const data = {
    ovog: toTitleCase(sp.get("ovog") || "БОРЖИГОН"),
    surname: toTitleCase(sp.get("surname") || "ЛХАГВАСҮРЭН"),
    givenName: (sp.get("givenName") || "УЯНГА").toUpperCase(),
    sex: toTitleCase(sp.get("sex") || "ЭМЭГТЭЙ"),
    dob: sp.get("dob") || "2004/11/29",
    Number: sp.get("Number") || "392346426872",
  };

  const labelBase = "text-[#025C8C] text-[10px] font-semibold leading-[11px]";
  const englishLabel = "text-[#025C8C] text-[9.5px] italic ml-[2px]";
  const valueText = "text-[#1E1E1E] text-[10.8px]";

  return (
    <div
      // Өргөнийг 446px болгож (2 талаас 2px) хасав.
      // overflow-hidden нь ирмэгийн зураасыг харагдуулахгүй тайрна.
      className="relative w-[446px] h-[282px] rounded-[18px] shadow-lg cursor-pointer overflow-hidden"
      style={{
        backgroundImage: "url('/images/IdCard.png')",
        backgroundSize: "101% 101%", // Зургийг ирмэг рүү нь үл ялиг шахав
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Дээд талын текстүүд */}
      <div className="absolute top-[10px] left-[132px]">
        <p className="text-[#025C8C] text-[12.5px] font-extrabold">
          МОНГОЛ УЛСЫН ИРГЭНИЙ ҮНЭМЛЭХ
        </p>
        <p className="text-[#025C8C] text-[10.5px] font-semibold mt-[3px]">
          CITIZEN IDENTITY CARD MONGOLIA
        </p>
      </div>

      {/* Профайл зураг */}
      <div className="absolute top-[75px] left-[26px] w-[105px] h-[132px] bg-white border border-[#D1D1D1] overflow-hidden">
        {profileImg ? (
          <img
            src={profileImg}
            alt="Иргэний зураг"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#E6E6E6]" />
        )}
      </div>

      {/* Мэдээллийн хэсэг */}
      <div className="absolute top-[60px] left-[146px] w-[270px] space-y-[4px]">
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
          <p className={labelBase}>Төрсөн он, сар, өдөр </p>
          <p className={englishLabel}>Date of birth</p>
          <p className={valueText}>{data.dob}</p>
        </div>
        <div className="mt-[-4px]">
          <p className={labelBase}>
            Иргэний бүртгэлийн дугаар{" "}
            <span className={englishLabel}>Civil identification</span>
          </p>
          <p className="text-[12px] font-normal text-[#000000] leading-tight">
            {data.Number}
          </p>
        </div>
      </div>

      {/* МОНГОЛ БИЧИГ - Ирмэгээс нь 2px-ээр дотогш шахав */}
      <div className="absolute top-[62px] right-[27px] w-[45px] h-[160px] flex justify-center items-center">
        <img
          src="/images/MongolBicheg.png"
          alt="Монгол бичиг"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}

export default function IdCardFront() {
  return (
    <Suspense
      fallback={
        <div className="w-[446px] h-[282px] bg-gray-200 animate-pulse rounded-[18px]" />
      }
    >
      <IdCardContent />
    </Suspense>
  );
}
